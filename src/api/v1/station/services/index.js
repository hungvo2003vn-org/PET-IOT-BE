import UserService from "../../user/services/index.js";
import createStation from "./createStation.js";
import editStation from "./editStation.js";
import newStation from "./newStation.js";
import getStations from "./getStations.js";

class StationService extends UserService {
    createStation = createStation
    editStation = editStation
    newStation = newStation
    getStations = getStations
}

export default StationService