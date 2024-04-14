import ScheduleService from "../services/index.js"

const stopFeed = async (req, res, next) => {
    try {
        const {schedule_id} = req.body

        const data = await new ScheduleService().stopFeed({
            schedule_id
        })

        res.status(200).json({data})

    } catch (err) {
        next(err)
    }
}

export default stopFeed