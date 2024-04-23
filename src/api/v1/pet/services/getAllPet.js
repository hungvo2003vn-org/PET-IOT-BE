import pet from '#~/model/pet.js';

async function getPets(user_id) {
  
  const allPets = await pet
    .find({user_id})
    .select(`
      -feedingLogs
      -createdAt
      -updatedAt
      -__v
      -medical_records
      -health_records
      -medicines
      -user_id
    `)
  return allPets;
}

export default getPets;
