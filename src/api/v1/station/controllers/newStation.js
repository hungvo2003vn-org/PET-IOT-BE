import StationService from "../services/index.js"

const newStation = async (req, res, next) => {
    try {
        const data = await new StationService().newStation()
        res.status(200).json({data})
    } catch (err) {
        next(err)
    }
}

export default newStation