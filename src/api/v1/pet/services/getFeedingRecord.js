import feedingLog from '#~/model/feedRecord.js'

async function getFeedingRecord(pet_id) {
  
  const schedules = await feedingLog.find({pet_id})

  return schedules
}
export default getFeedingRecord
