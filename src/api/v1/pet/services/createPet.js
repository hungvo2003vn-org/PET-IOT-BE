import pet from '#~/model/pet.js'
import user from '#~/model/user.js'

async function createPet({
  type,
  breed,
  birth_date,
  color,
  name,
  user_note,
  image,
  user_id
}) {
  const petRecord = await pet.create({
    type,
    breed,
    birth_date: new Date(birth_date),
    color,
    name,
    user_note,
    image,
    user_id
  })

  const userRecord = await user
    .findByIdAndUpdate(
      user_id,
      {
        $push: {
          pets: petRecord._id.toString()
        }
      }
    )
  
  return petRecord
}
export default createPet
