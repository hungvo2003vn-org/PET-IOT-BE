import pet from '#~/model/pet.js'

async function editPet({
  petId,
  type,
  breed,
  birth_date,
  color,
  name,
  user_note,
  image,

  station_id,
}) {
  try {
    // Step 1: Find the pet
    const findPet = await pet.findById(petId)
    if (!findPet) {
      throw new Error('Pet not found')
    }

    // Step 2: Update pet's details
    if (type) findPet.type = type
    if (breed) findPet.breed = breed
    if (birth_date) findPet.birth_date = birth_date
    if (color) findPet.color = color
    if (name) findPet.name = name
    if (user_note) findPet.user_note = user_note
    if (image) findPet.image = image
    if (station_id) findPet.station_id = station_id

    // Step 3: Save the changes
    await findPet.save()

    return { message: 'Pet details updated successfully' }
  } catch (error) {
    throw error
  }
}

export default editPet
