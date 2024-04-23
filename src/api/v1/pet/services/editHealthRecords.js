import pet from '#~/model/pet.js'
import isValidObjectId from '#~/middleware/checkValidId.js'

async function editHealthRecords({
  petId,
  recordId,
  status,
  weight,
  record_date
}) {

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

  const health_records = findPet.health_records
  const recordToUpdate = health_records.find(
    (record) => record._id.toString() === recordId,
  )

  if (!recordToUpdate) {
    return Promise.reject({
      status: 404,
      message: 'Medical record not found',
    })
  }

  // Update record
  if (status) recordToUpdate.status = status
  if (weight) recordToUpdate.weight = weight
  if (record_date) recordToUpdate.record_date = new Date(record_date)
  await findPet.save()

  return {
    pet_id: findPet._id.toString(),
    health_records: findPet.health_records,
    updated_health: recordToUpdate
  }
}
export default editHealthRecords
