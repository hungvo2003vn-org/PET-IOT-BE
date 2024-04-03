import UserService from '../../user/services/index.js'
import createPet from './createPet.js'
import getPetbyUser from './getPetbyUser.js'
import createRecord from './createRecord.js'
import getRecord from './getRecord.js'
import editRecord from './editRecord.js'
class PetService extends UserService {
  createPet = createPet
  getPetbyUser = getPetbyUser
  createRecord = createRecord
  getRecord = getRecord
  editRecord = editRecord
}
export default PetService
