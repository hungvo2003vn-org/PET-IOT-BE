import schedule from 'node-schedule'

var scheduler
function initScheduler() {
    scheduler = schedule
    console.log("Init Scheduler for automatic feeding mode!")
}

export {initScheduler, scheduler}