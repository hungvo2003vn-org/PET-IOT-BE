import StationService from "../services/index.js";

const assignPet = async (req, res, next) => {
    try {
        const { station_id, pet_id } = req.body
        const data = await new StationService().assignPet({ station_id, pet_id })

        res.status(200).json({data})
    } catch (error) {
        next(error)
    }
}

export default assignPet