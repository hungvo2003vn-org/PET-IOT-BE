import createSchedule from './createSchedule.js'
import startFeed from './startFeed.js'
import stopFeed from './stopFeed.js'

class ScheduleService {
  startFeed = startFeed
  stopFeed = stopFeed
  createSchedule = createSchedule
}

export default ScheduleService
