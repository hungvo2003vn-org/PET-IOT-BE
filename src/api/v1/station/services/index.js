import UserService from "../../user/services/index.js";
import createStation from "./createStation.js";
import editStation from "./editStation.js";

class StationService extends UserService {
    createStation = createStation
    editStation = editStation
}

export default StationService