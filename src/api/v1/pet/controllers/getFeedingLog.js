import PetService from '../services/index.js'

const getFeedingLog = async (req, res, next) => {
  try {
    const { petId, start_time, end_time } = req.query

    const data = await new PetService().getFeedingLog({
      petId,
      start_time,
      end_time,
    })
    if (!data) {
      res.status(404).send({ message: 'feedingLog not found' })
    }
    res.status(200).json({ data })
  } catch (err) {
    // Xử lý lỗi nếu có
    next(err)
  }
}

export default getFeedingLog
