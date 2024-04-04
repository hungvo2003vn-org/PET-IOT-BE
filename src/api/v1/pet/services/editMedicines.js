import pet from '#~/model/pet.js'
import { io } from '#~/config/socketIo.js'

async function editMedicines({ petId, recordId, type, name }) {
  try {
    // Bước 1: Lấy pet và records
    const findPet = await pet.findById(petId)
    if (!findPet) {
      throw new Error('Pet not found')
    }

    const medicalRecords = findPet.medicines
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
    if (type) recordToUpdate.type = type
    if (name) recordToUpdate.name = name

    await findPet.save()

    return { message: 'Record updated successfully' }
  } catch (error) {
    throw error
  }
}
export default editMedicines
