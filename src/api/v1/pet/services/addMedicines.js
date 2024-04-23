import pet from '#~/model/pet.js'
import isValidObjectId from '#~/middleware/checkValidId.js'

async function addMedicines({ petId, type, name }) {

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

  findPet.medicines.push({ type, name })
  await findPet.save()

  return {
    pet_id: findPet._id.toString(),
    medicines: findPet.medicines
  }

}
export default addMedicines
