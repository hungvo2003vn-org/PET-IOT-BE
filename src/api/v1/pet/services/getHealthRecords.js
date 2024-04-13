import pet from '#~/model/pet.js'

async function getHealthRecords({ petId }) {
  var findPet = await pet.findById(petId)
  if (!findPet) {
    return Promise.reject({
      status: 404,
      message: 'Wrong printerId value or not assigned value',
    })
  }
  const records = findPet.health_records.map((record) => record.toObject())
  console.log(records)
  return records
}

export default getHealthRecords
