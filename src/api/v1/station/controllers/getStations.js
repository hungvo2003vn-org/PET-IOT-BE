import StationService from "../services/index.js"

const getStations = async (req, res, next) => {
    try {
        const {
            id
        } = req.query

        const data = await new StationService().getStations({
            station_id: id
        })
        res.status(200).json({data})
    } catch (err) {
        next(err)
    }
}

export default getStations