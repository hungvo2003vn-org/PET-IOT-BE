import PetService from '../services/index.js';

const getPets = async (req, res, next) => {
  try {
    const user_id = req.userService.userInfo._id.toString()
    const data = await new PetService().getPets(user_id);

    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};

export default getPets;
