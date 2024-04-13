import PetService from '../services/index.js'

const addHealthRecords = async (req, res, next) => {
  try {
    const { petId, status, weight, record_date } = req.body
    const data = await new PetService().addHealthRecords({
      petId,
      status,
      weight,
      record_date,
    })
    res.status(200).json({ data })

    console.log(data)
  } catch (err) {
    next(err)
  }
}

export default addHealthRecords
