import pet from '#~/model/pet.js'

async function getPetbyUser({ per_page, current_page, user }) {
  //   if (user == undefined) {
  //     var pets = await pet
  //       .find({})
  //       .skip((current_page - 1) * per_page)
  //       .limit(per_page)
  //     var totalPets = (await pet.find({})).length
  //   } else
  {
    var pets = await pet
      .find({ user: user })
      .skip((current_page - 1) * per_page)
      .limit(per_page)
    var totalPets = (await pet.find({ user:user } )).length
  }
  var data = {
    per_page,
    current_page,
    total_pages: Math.ceil(totalPets / per_page),
    totalPets,
    pets,
  }
  return data
}
export default getPetbyUser
