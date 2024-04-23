import PetService from '../services/index.js'

const getPetById = async (req, res, next) => {
  try {
    const { petId } = req.params
    const data = await new PetService().getPetById({ petId })
    
    res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
}

export default getPetById
