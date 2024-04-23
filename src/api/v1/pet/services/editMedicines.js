import pet from '#~/model/pet.js'
import isValidObjectId from '#~/middleware/checkValidId.js'

async function editMedicines({ petId, recordId, type, name }) {

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

  const medicineRecords = findPet.medicines
  const recordToUpdate = medicineRecords.find(
    (record) => record._id.toString() === recordId,
  )

  if (!recordToUpdate) {
    return Promise.reject({
      status: 404,
      message: 'Medicine record not found',
    })
  }

  // Update record
  if (type) recordToUpdate.type = type
  if (name) recordToUpdate.name = name

  await findPet.save()

  return {
    pet_id: findPet._id.toString(),
    medicines: findPet.medicines,
    updated_medicine: recordToUpdate
  }
}
export default editMedicines
