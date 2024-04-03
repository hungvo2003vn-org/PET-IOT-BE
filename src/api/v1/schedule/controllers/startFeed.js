import ScheduleService from "../services/index.js"

const startFeed = async (req, res, next) => {
    try {
        const {station_id, feed_amount} = req.body

        const data = await new ScheduleService().startFeed({
            station_id, 
            feed_amount
        })

        res.status(200).json({data})

    } catch (err) {
        next(err)
    }
}

export default startFeed