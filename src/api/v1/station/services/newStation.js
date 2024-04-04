import station from '#~/model/station.js';

async function newStation() {

    // Create new station
    const newStation = await station.create({});
    
    return newStation;
}

export default newStation;
