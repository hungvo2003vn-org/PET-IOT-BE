import StationService from "../services/index.js"

const editStation = async (req, res, next) => {
    try {
        const {
            station_id,
            station_name,
            box_volumn,
            box_remain,
            food_name,
            disk_remain,
            mode,
            soundType,
            pet_id,
        } = req.body

        const data = await new StationService().editStation({
            station_id,
            station_name,
            box_volumn,
            box_remain,
            food_name,
            disk_remain,
            mode,
            soundType,
            pet_id,
        })

        res.status(200).json({data})

    } catch (err) {
        next(err)
    }
} 

export default editStation