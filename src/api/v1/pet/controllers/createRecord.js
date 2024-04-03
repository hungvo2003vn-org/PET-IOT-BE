import PetService from '../services/index.js'


const createRecord = async (req, res, next) => {
  try {
   const { petId, date, description } = req.body;
 const data = await new PetService().createRecord({ petId, date, description });
    res.status(200).json({ data })
  } catch (err) {
    next(err)
  }
}

export default createRecord
