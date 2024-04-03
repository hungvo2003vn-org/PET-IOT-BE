import pet from '#~/model/pet.js'

const getAllPets = async (req, res, next) => {
  try {
	  const pets = await pet
		//   .find({ user: req.user })
    if (pets.length === 0) {
      console.log('No pets found for user:', req.user)
    }
    console.log('All pets for user', user + ':', pets)
    res.status(200).json({ pets })
  } catch (err) {
    next(err)
  }
}

export default getAllPets
