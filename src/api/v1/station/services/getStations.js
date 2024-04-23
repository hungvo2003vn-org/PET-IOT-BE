import station from "#~/model/station.js"

async function getStations({
    station_id,
}) {
    let query = {}
    if (station_id) { query.station_id = station_id}
    let allStations = await station
        .find(query)
        .select(`
            -_id
            -feedingLogs_finish 
            -feedingLogs_inProgress 
            -feedingLogs_new
            -user_id
            -__v
            -createdAt
            -updatedAt
        `
        )
    
    if (station_id && allStations.length == 0) {
        return Promise.reject({
            status: 404,
            message: `The feeding station with id: ${station_id} not found!`
        })
    }

    if(station_id){
        return allStations[0]
    }
    
    return allStations
}

export default getStations