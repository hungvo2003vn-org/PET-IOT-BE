import PetService from '../services/index.js'

const addMedicalRecords = async (req, res, next) => {
  try {
    const { petId, date, description } = req.body
    const data = await new PetService().addMedicalRecords({
      petId,
      date,
      description,
    })
    res.status(200).json({ data })

    console.log(data)
  } catch (err) {
    next(err)
  }
}

export default addMedicalRecords
