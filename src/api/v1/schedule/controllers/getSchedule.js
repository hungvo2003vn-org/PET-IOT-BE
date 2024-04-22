import ScheduleService from "../services/index.js"

const getSchedules = async (req, res, next) => {
    try {
        const { station_id } = req.params
        const data = await new ScheduleService().getSchedules({ station_id })
        res.status(200).json({data})
        
    } catch (error) {
        next(error)
    }
}

export default getSchedules