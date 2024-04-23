import pet from '#~/model/pet.js'
import isValidObjectId from '#~/middleware/checkValidId.js'

async function getHealthRecords({ petId }) {
  if(!petId || !isValidObjectId(petId)) {
    return Promise.reject({
      status: 404,
      message: 'Pet not found'
    })
  }

  const findPet = await pet.findById(petId)
  if (!findPet) {
    return Promise.reject({
      status: 404,
      message: 'Pet not found'
    })
  }

  return {
    pet_id: findPet._id.toString(),
    health_records: findPet.health_records
  }
}

export default getHealthRecords
