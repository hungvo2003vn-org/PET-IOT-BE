import PetService from '../services/index.js'

const editMedicines = async (req, res, next) => {
  try {
    const { petId, recordId, type, name } = req.body
    const data = await new PetService().editMedicines({
      petId,
      recordId,
      type,
      name,
    })
    res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
}

export default editMedicines
