import pet from '#~/model/pet.js'
import { io } from '#~/config/socketIo.js'

async function editHealthRecords({
  petId,
  recordId,
  status,
  weight,
  record_date,
}) {
  try {
    // Bước 1: Lấy pet và records
    const findPet = await pet.findById(petId)
    if (!findPet) {
      throw new Error('Pet not found')
    }

    const medicalRecords = findPet.health_records
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
    if (status) recordToUpdate.status = status
    if (weight) recordToUpdate.weight = weight
    if (record_date) recordToUpdate.record_date = record_date
    await findPet.save()

    return { message: 'Record updated successfully' }
  } catch (error) {
    throw error
  }
}
export default editHealthRecords
