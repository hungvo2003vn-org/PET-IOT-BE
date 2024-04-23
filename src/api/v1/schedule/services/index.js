import createSchedule from './createSchedule.js'
import startFeed from './startFeed.js'
import stopFeed from './stopFeed.js'
import getSchedules from './getSchedule.js'

class ScheduleService {
  startFeed = startFeed
  stopFeed = stopFeed
  createSchedule = createSchedule
  getSchedules = getSchedules
}

export default ScheduleService
