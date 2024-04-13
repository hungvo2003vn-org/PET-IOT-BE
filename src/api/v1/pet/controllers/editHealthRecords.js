import PetService from '../services/index.js'

const editHealthRecords = async (req, res, next) => {
  try {
    const { petId, recordId, status, weight, record_date } = req.body
    const data = await new PetService().editHealthRecords({
       petId,
  recordId,
  status,
  weight,
  record_date,
    })
    res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
}

export default editHealthRecords
