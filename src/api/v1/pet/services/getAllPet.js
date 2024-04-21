import pet from '#~/model/pet.js';

async function getPets() {
  const allPets = await pet.find({}); // Assuming you're using some sort of ORM like Mongoose
  return allPets;
}

export default getPets;
