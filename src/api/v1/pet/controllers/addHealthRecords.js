import PetService from '../services/index.js'

const addHealthRecords = async (req, res, next) => {
  try {
    const { petId, status, weight } = req.body
    const data = await new PetService().addHealthRecords({
      petId,
      status,
      weight,
    })
    res.status(200).json({ data })

  } catch (err) {
    next(err)
  }
}

export default addHealthRecords
