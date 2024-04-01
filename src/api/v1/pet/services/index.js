import UserService from '../../user/services/index.js'
import createPet from './createPet.js'
class PetService extends UserService {
  createPet = createPet
}
export default PetService
