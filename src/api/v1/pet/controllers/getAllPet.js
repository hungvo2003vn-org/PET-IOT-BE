import pet from '#~/model/pet.js'

const getAllPets = async (req, res, next) => {
  try {
	  const pets = await pet
		//   .find({ user: req.user })
    if (pets.length === 0) {
      console.log('No pets found for user:', req.user)
    }
    console.log('All pets for user', user + ':', pets)
    res.status(200).json({ pets })
  } catch (err) {
    next(err)
  }
}

export default getAllPets
/*
import Pet from './petModel.js'; // Import pet model

const getAllPets = async () => {
    try {
        // Lấy tất cả các pet từ cơ sở dữ liệu
        const pets = await Pet.find();

        if (pets.length === 0) {
            console.log('No pets found');
            return [];
        }

        console.log('All pets:', pets);
        return pets;
    } catch (error) {
        console.error('Error getting pets:', error);
        return [];
    }
};

// Sử dụng
getAllPets();*/
