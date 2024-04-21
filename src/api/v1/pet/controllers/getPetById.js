import PetService from '../services/index.js'

const getPetById = async (req, res, next) => {
  try {
    const { petId } = req.query
    const pet = await new PetService().getPetById({ petId })
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' })
    }
    res.status(200).json({ pet })
  } catch (err) {
    next(err)
  }
}

export default getPetById
