import PetService from '../services/index.js'

const createPet = async (req, res, next) => {
  try {
    const {
      type,
      breed,
      birth_date,
      color,
      name,
      user_note,
      image
    } = req.body
    const data = await new PetService().createPet({
      type,
      breed,
      birth_date,
      color,
      name,
      user_note,
      image,
      user_id: req.userService.userInfo._id.toString(),
    })
    
    res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
}

export default createPet
