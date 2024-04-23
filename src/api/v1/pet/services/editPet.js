import pet from '#~/model/pet.js'
import isValidObjectId from '#~/middleware/checkValidId.js'

async function editPet({
  petId,
  type,
  breed,
  birth_date,
  color,
  name,
  user_note,
  image
}) {
  try {

    if(!isValidObjectId(petId)) {
      return Promise.reject({
        status: 404,
        message: 'Pet not found'
      })
    }

    // Step 1: Find the pet
    const findPet = await pet
      .findById(petId)
      .select(`
      -feedingLogs
      -createdAt
      -updatedAt
      -__v
      -medical_records
      -health_records
      -medicines
      -user_id
      -station_id
    `)

    if (!findPet) {
      return Promise.reject({
        status: 404,
        message: 'Pet not found'
      })
    }

    // Step 2: Update pet's details
    if (type !== null && type !== undefined) findPet.type = type
    if (breed !== null && breed !== undefined) findPet.breed = breed
    if (birth_date !== null && birth_date !== undefined) findPet.birth_date = new Date(birth_date)
    if (color !== null && color !== undefined) findPet.color = color
    if (name !== null && name != undefined) findPet.name = name
    if (user_note !== null && user_note !== undefined) findPet.user_note = user_note
    if (image !== null && image !== undefined) findPet.image = image

    // Step 3: Save the changes
    await findPet.save()
    return findPet

  } catch (error) {
    throw error
  }
}

export default editPet
