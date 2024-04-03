import pet from '#~/model/pet.js'

async function createRecord({ petId, date, description }) {
  try {
    const findPet = await pet.findById(petId)
    if (!findPet) {
      throw new Error('Pet not found')
    }

    findPet.medical_records.push({ date, description })
    await findPet.save()
    return findPet
  } catch (err) {
    next(err)
  }

  return petRecord
}
export default createRecord

