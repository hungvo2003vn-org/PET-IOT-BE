import pet from '#~/model/pet.js'
const getPetbyId = async (req, res, next) => {
  let data
  try {
    const id = req.params.id
    console.log(user)
    data = await pet.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    // Xử lý lỗi nếu có
    next(err)
  }
  if (!data) {
    return res.status(404).json({ message: 'No Pet found' })
  }
  res.status(200).json({ data })
}

export default getPetbyId
