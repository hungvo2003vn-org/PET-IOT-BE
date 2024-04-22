import ScheduleService from "../services/index.js"

const createSchedule = async (req, res, next) => {
    try {
        const {
            station_id, 
            feed_amount,
            start_time,
            end_time
        } = req.body

        const data = await new ScheduleService().createSchedule({
            station_id, 
            feed_amount,
            start_time,
            end_time
        })

        res.status(200).json({data})

    } catch (err) {
        next(err)
    }
}

export default createSchedule