import pet from '#~/model/pet.js'

async function createPet({
  type,
  breed,
  birth_date,
  color,
  name,
  user_note,
  image,
  medical_records,
  medicines,
  health_records,
  station_id,
  feedingLogs,
  user_id,
}) {
  const petRecord = await pet.create({
    type,
    breed,
    birth_date,
    color,
    name,
    user_note,
    image,
    medical_records,
    medicines,
    health_records,
    station_id,
    feedingLogs,
    user_id,
  })
  console.log(petRecord)
  return petRecord
}
export default createPet
