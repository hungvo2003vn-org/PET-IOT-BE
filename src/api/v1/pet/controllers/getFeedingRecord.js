import PetService from "../services/index.js";

const getFeedingRecord = async (req, res, next) => {
    try {
        const { pet_id } = req.params
        const data = await new PetService().getFeedingRecord(pet_id)

        res.status(200).json({data})
    } catch (error) {
        next(error)
    }
}

export default getFeedingRecord