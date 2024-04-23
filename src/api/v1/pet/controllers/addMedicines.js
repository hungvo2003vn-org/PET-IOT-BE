import PetService from '../services/index.js'

const addMedicines = async (req, res, next) => {
  try {
    const { petId, type, name } = req.body
    const data = await new PetService().addMedicines({
      petId,
      type,
      name
    })
    res.status(200).json({ data })

  } catch (err) {
    next(err)
  }
}

export default addMedicines
