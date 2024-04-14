import feedingLog from "#~/model/feedRecord.js";
import station from "#~/model/station.js";
import isValidDateFormat from "#~/middleware/checkValidDate.js";
import { scheduler } from "#~/config/scheduler.js";
import startFeed from "./startFeed.js";
import stopFeed from "./stopFeed.js";
import {} from 'dotenv/config'

async function createSchedule({
    station_id,
    start_time,
    end_time,
    feed_amount
}) {
    
    //Check if start_time and end_time is valid
    if(!start_time || !isValidDateFormat(start_time) || !end_time || !isValidDateFormat(end_time)) {
        return Promise.reject({
            status: 503,
            message: `Please enter valid Date() format in [yyyy-mm-dd hh:mm:ss], for example: [2024-14-04 10:14:25]`
        })
    }

    //Create new Datetime format
    const timezone = process.env.TIMEZONE; // Default to 0 if TIMEZONE_OFFSET is not set
    let current_time = new Date(Date.now());
    start_time = new Date(start_time);
    end_time = new Date(end_time);

    //Change to Same timeZone
    current_time = new Date(current_time.toLocaleString('en-US', { timeZone: timezone }));
    start_time = new Date(start_time.toLocaleString('en-US', { timeZone: timezone }));
    end_time = new Date(end_time.toLocaleString('en-US', { timeZone: timezone }));
    
    //Check valid date range
    if(start_time >= end_time || start_time < current_time) {
        return Promise.reject({
            status: 503,
            message: `Please enter end_time > start_time > current_time`
        })
    }

    //Check if the station is exist or not
    const checkStation = await station.findOne({station_id: station_id})
    if(!checkStation) {
        return Promise.reject({
            status: 404,
            message: `The station with id=${station_id} was not found!`
        })
    }

    //TODO: Create new schedule
    const newSchedule = await feedingLog.create({
        start_time,
        end_time,
        feed_amount,
        food_name: checkStation.food_name,
        status: "New",
        mode: true,
        station_id,
        pet_id: checkStation.pet_id
    })

    //TODO: Set time-scheduler to trigger startFeed()
    scheduler.scheduleJob(start_time, async () => {
        try {
            await startFeed({
                station_id,
                feed_amount,
                schedule_id: newSchedule._id.toString(),
                start_time
            });
        } catch (error) {
            console.log(error)
        }
    });

    //TODO: Set time-scheduler to trigger stopFeed()
    scheduler.scheduleJob(end_time, async () => {
        try {
            await stopFeed({
                schedule_id: newSchedule._id.toString()
            });
        } catch (error) {
            console.log(error)
        }
    });


    return newSchedule
}

export default createSchedule