import feedingLog from "#~/model/feedRecord.js" 

async function getSchedules({
    station_id
}) {

    const allSchedules = await feedingLog.find({
        station_id: station_id
    }).select(`
        -__v
        -createdAt
        -updatedAt
    `)

    return allSchedules
}

export default getSchedules