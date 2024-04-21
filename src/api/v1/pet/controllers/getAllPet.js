import PetService from '../services/index.js';

const getPets = async (req, res, next) => {
  try {
    const pets = await new PetService().getPets();
    res.status(200).json({ pets });
  } catch (err) {
    next(err);
  }
};

export default getPets;
