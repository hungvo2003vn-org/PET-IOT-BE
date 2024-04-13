import UserService from '../../user/services/index.js'
import createPet from './createPet.js'
import addMedicalRecords from './addMedicalRecords.js'
import getMedicalRecords from './getMedicalRecords.js'
import editMedicalRecords from './editMedicalRecords.js'
import addMedicines from './addMedicines.js'
import editMedicines from './editMedicines.js'
import getMedicines from './getMedicines.js'
import addHealthRecords from './addHealthRecords.js'
import editHealthRecords from './editHealthRecords.js'
import getHealthRecords from './getHealthRecords.js'
class PetService extends UserService {
  createPet = createPet
  addMedicalRecords = addMedicalRecords
  getMedicalRecords = getMedicalRecords
  editMedicalRecords = editMedicalRecords
  addMedicines = addMedicines
  editMedicines = editMedicines
  getMedicines = getMedicines
  addHealthRecords = addHealthRecords
  editHealthRecords = editHealthRecords
  getHealthRecords = getHealthRecords
}
export default PetService
