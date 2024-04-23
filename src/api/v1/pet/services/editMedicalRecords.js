import pet from '#~/model/pet.js'
import isValidObjectId from '#~/middleware/checkValidId.js'

async function editMedicalRecords({ petId, recordId, date, description }) {

  if(!petId || !isValidObjectId(petId)) {
    return Promise.reject({
      status: 404,
      message: 'Pet not found'
    })
  }

  // Bước 1: Lấy pet và records
  const findPet = await pet.findById(petId)
  if (!findPet) {
    return Promise.reject({
      status: 404,
      message: 'Pet not found'
    })
  }

  const medicalRecords = findPet.medical_records
  const recordToUpdate = medicalRecords.find(
    (record) => record._id.toString() === recordId,
  )

  if (!recordToUpdate) {
    return Promise.reject({
      status: 404,
      message: 'Medical record not found',
    })
  }

  // Update record
  if (date) recordToUpdate.date = new Date(date)
  if (description) recordToUpdate.description = description

  await findPet.save()

  return {
    pet_id: findPet._id.toString(),
    medical_records: findPet.medical_records,
    updated_medical: recordToUpdate
  }
}
export default editMedicalRecords
