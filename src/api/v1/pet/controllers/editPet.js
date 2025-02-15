import PetService from '../services/index.js'

const editPet = async (req, res, next) => {
  try {
    const {
      petId,
      type,
      breed,
      birth_date,
      color,
      name,
      user_note,
      image
    } = req.body
    const data = await new PetService().editPet({
      petId,
      type,
      breed,
      birth_date,
      color,
      name,
      user_note,
      image
    })
    res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
}

export default editPet
