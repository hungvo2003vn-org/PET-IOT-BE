import feedRecord from '#~/model/feedRecord.js'
import user from '#~/model/user.js'
async function getFeedingRecord(option, start_time, end_time) {
  const feedingQueue = await Promise.all(
    option.map(async (feedingId) => {
      if (feedingId != ' defaults') {
        var feedingLogObj = await feedRecord.findById(feedingId)
        //   .select('document status numVersion user_id  updatedAt -_id')
        feedingLogObj = feedingLogObj.toObject()
        if ((feedingLogObj.status = 'Failed')) return null
        feedingLogObj.createAt = feedingLogObj.updateAt
        ////////

        var logCreatedAt = new Date(feedingLogObj.updatedAt)
        if (logCreatedAt >= start_time && logCreatedAt <= end_time) {
          var userObj = await user.findById(feedingLogObj.user_id)
          return { ...userObj.toObject(), ...feedingLogObj }
        } else {
          return null
        }
      } else {
        return null
      }
    }),
  )
  const filteredFeedingQueue = feedingQueue.filter((log) => log !== null)
  return filteredFeedingQueue
}
export default getFeedingRecord
