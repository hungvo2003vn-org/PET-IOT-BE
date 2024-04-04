import PetService from '../services/index.js'

const editMedicalRecords = async (req, res, next) => {
  try {
    const { petId, recordId, date, description } = req.body
    const data = await new PetService().editMedicalRecords({
      petId,
      recordId,
      date,
      description,
    })
    res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
}

export default editMedicalRecords
