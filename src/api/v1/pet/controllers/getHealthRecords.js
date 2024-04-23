import PetService from '../services/index.js'

const getHealthRecords = async (req, res, next) => {
  try {
    const { petId } = req.query
    const data = await new PetService().getHealthRecords({ petId })
    
    res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
}

export default getHealthRecords
