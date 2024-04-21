import pet from '#~/model/pet.js'

async function getPetById({ petId }) {
  var findPet = await pet.findById(petId)
  if (!findPet) {
    return Promise.reject({
      status: 404,
      message: 'Wrong printerId value or not assigned value',
    })
  }

  console.log(findPet)
  return findPet
}

export default getPetById
