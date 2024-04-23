import pet from '#~/model/pet.js'
import isValidObjectId from '#~/middleware/checkValidId.js'

async function getPetById({ petId }) {

  if(petId == undefined || petId == null || !isValidObjectId(petId)) {
    return Promise.reject({
      status: 404,
      message: 'Wrong petId value or not assigned value',
    })
  }

  const findPet = await pet
    .findById(petId)
    .select(`
      -feedingLogs
      -createdAt
      -updatedAt
      -__v
      -medical_records
      -health_records
      -medicines
      -user_id
    `)
  if (!findPet) {
    return Promise.reject({
      status: 404,
      message: 'Wrong petId value or not assigned value',
    })
  }

  return findPet
}

export default getPetById
