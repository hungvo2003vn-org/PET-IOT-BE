import pet from '#~/model/pet.js'

async function addHealthRecords({ petId, status, weight, record_date }) {
  try {
    const findPet = await pet.findById(petId)
    if (!findPet) {
      throw new Error('Pet not found')
    }

    findPet.health_records.push({ status, weight, record_date})
    await findPet.save()
    return findPet
  } catch (err) {
    next(err)
  }

  return petRecord
}
export default addHealthRecords
