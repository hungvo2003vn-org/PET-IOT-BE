import feedingLog from "#~/model/feedRecord.js";
import station from "#~/model/station.js";
import isValidDateFormat from "#~/middleware/checkValidDate.js";
import { scheduler } from "#~/config/scheduler.js";
import startFeed from "./startFeed.js";
import stopFeed from "./stopFeed.js";

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
    start_time = new Date(start_time)
    end_time = new Date(end_time)
    start_time = new Date(start_time.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));
    end_time = new Date(end_time.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));

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
            console.log(`StartFeed at ${start_time}`)
            await startFeed({
                station_id,
                feed_amount,
                schedule_id: newSchedule._id.toString(),
                start_time
            });
            console.log(`Done StartFeed at ${start_time}`)
        } catch (error) {
            console.error('Error in startFeed scheduler:', error);
        }
    });

    // //TODO: Set time-scheduler to trigger stopFeed()
    // scheduler.scheduleJob(end_time, async () => {
    //     try {
    //         console.log(`EndFeed at ${end_time}`)
    //         await stopFeed({
    //             schedule_id: newSchedule._id.toString()
    //         });
    //         console.log(`Done EndFeed at ${end_time}`)
    //     } catch (error) {
    //         console.error('Error in stopFeed scheduler:', error);
    //     }
    // });


    return newSchedule
}

export default createSchedule