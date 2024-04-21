import feedingLog from "#~/model/feedRecord.js";
import station from "#~/model/station.js";
import isValidObjectId from "#~/middleware/checkValidId.js";

async function stopFeed({
    schedule_id
}) {

    //Check if the schedule is existed or not
    if(!isValidObjectId(schedule_id)) {
        return Promise.reject({
            status: 404,
            message: `The schedule with id=${schedule_id} was not found!`
        })
    }

    const checkSchedule = await feedingLog.findById(schedule_id)
    if(!checkSchedule) {
        return Promise.reject({
            status: 404,
            message: `The schedule with id=${schedule_id} was not found!`
        })
    }

    //No need to update if the schedule already stopped
    if(checkSchedule.status === "Finish"){
        return Promise.reject({
            status: 503,
            message: `The schedule with id=${schedule_id} has already stopped!`
        })
    }

    //Check if the station is existed or not
    let station_id = checkSchedule.station_id

    const checkStation = await station.findOne({station_id: station_id})
    if(!checkStation) {
        return Promise.reject({
            status: 404,
            message: `The station with id=${station_id} was not found!`
        })
    }

    
    //Record the schedule information
    let end_time = checkSchedule.end_time
    const updates = {
        end_time: (end_time ? end_time : new Date()),
        status: "Finish",
        disk_remain: checkStation.disk_remain
    }
    const recordSchedule = await feedingLog.findByIdAndUpdate(
        schedule_id,
        updates,
        {new: true}
    ).select(
        `
            -__v
            -createdAt
            -updatedAt
        `
    )

    return recordSchedule
}

export default stopFeed
