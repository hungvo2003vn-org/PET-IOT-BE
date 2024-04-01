import PetService from '../services/index.js'
import pet from '#~/model/pet.js'

const createPet = async (req, res, next) => {
  try {
    const {
      type,
      breed,
      birth_date,
      color,
      name,
      user_note,
      image,
      medical_records,
      feedingStation,
      user,
    } = req.body
    const data = await req.PetService.createPet({
      type,
      breed,
      birth_date,
      color,
      name,
      user_note,
      image,
      medical_records,
      feedingStation,
      user,
    })
    res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
}

export default createPet
