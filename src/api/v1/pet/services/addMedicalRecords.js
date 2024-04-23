import pet from '#~/model/pet.js'
import isValidObjectId from '#~/middleware/checkValidId.js'

async function addMedicalRecords({ petId, date, description }) {
  
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

  findPet.medical_records.push({ date: new Date(date), description })
  await findPet.save()
  return {
    pet_id: findPet._id.toString(),
    medical_records: findPet.medical_records
  }

}
export default addMedicalRecords

