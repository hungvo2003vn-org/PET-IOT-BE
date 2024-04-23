import pet from '#~/model/pet.js'
import isValidObjectId from '#~/middleware/checkValidId.js'

async function getMedicalRecords({ petId }) {

  if(!petId || !isValidObjectId(petId)) {
    return Promise.reject({
      status: 404,
      message: 'Pet not found'
    })
  }

  const findPet = await pet.findById( petId );
  if (!findPet) {
    return Promise.reject({
      status: 404,
      message: 'Pet not found',
    })
  }

  return {
    pet_id: findPet._id.toString(),
    medical_records: findPet.medical_records
  }
  
}

export default getMedicalRecords
