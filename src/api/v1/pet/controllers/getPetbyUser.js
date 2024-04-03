import PetService from '../services/index.js'

const getPetbyUser = async (req, res, next) => {
  try {
    const { user, per_page, current_page } = req.query
    console.log(user)
    const data = await new PetService().getPetbyUser({
      per_page,
      current_page,
      user,
    })
    res.status(200).json({ data })
  } catch (err) {
    // Xử lý lỗi nếu có
    next(err)
  }
}

export default getPetbyUser
