import PetService from '../services/index.js'

const getMedicalRecords = async (req, res, next) => {
  try {
    const { petId } = req.query
    const data = await new PetService().getMedicalRecords({ petId })
    
    res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
}

export default getMedicalRecords
