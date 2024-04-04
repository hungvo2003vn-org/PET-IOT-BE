import StationService from "../services/index.js"

const createStation = async (req, res, next) => {
    try {
        const {
            station_id,
            box_volumn,
            box_remain,
            food_name,
            disk_remain,
            mode,
            soundType,
            pet_id
        } = req.body
        const data = await new StationService().createStation({
            station_id,
            box_volumn,
            box_remain,
            food_name,
            disk_remain,
            mode,
            soundType,
            pet_id,
            user_id: req.userService.userInfo._id.toString()
        })

        res.status(200).json({data})

    } catch (err) {
        next(err)
    }
}

export default createStation