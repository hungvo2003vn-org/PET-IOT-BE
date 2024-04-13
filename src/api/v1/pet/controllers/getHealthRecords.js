import PetService from '../services/index.js'

const getHealthRecords = async (req, res, next) => {
  try {
    const { petId } = req.query

    const data = await new PetService().getHealthRecords({ petId })
    if (!data) {
      res.status(404).send({ message: 'Pet not found' })
    }
    res.status(200).json({ data })
  } catch (err) {
    // Xử lý lỗi nếu có
    next(err)
  }
}

export default getHealthRecords
