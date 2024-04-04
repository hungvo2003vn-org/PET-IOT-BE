import pet from '#~/model/pet.js'

async function addMedicines({ petId, type, name }) {
  try {
    const findPet = await pet.findById(petId)
    if (!findPet) {
      throw new Error('Pet not found')
    }

    findPet.medicines.push({ type, name })
    await findPet.save()
    return findPet
  } catch (err) {
    next(err)
  }

  return petRecord
}
export default addMedicines
