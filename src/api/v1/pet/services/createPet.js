import pet from '#~/model/pet.js'

async function createPet({
  type,
  breed,
  birth_date,
  color,
  name,
  user_note,
  image,

  feedingStation,
  user,
}) {
  const petRecord = await pet.create({
    type,
    breed,
    birth_date,
    color,
    name,
    user_note,
    image,
   
    feedingStation,
    user,
  })
  console.log(petRecord)
  return petRecord
}
export default createPet

// // type: {type: String, default: null},
//         breed: {type: String, default: null},
//         birth_date: {type: Date, default: null},
//         color: {type: String, default: null},
//         name: {type: String, default: null},
//         user_note: {type: String, default: null},
//         image: {type: String, default: null},
//         medical_records: [
//             {
//                 date: {type: Date, default: null},
//                 description: {type: String, default: null}
//             }
//         ],
//         medicines: [{
//             type: {type: String, default: null},
//             name: {type: String, default: null}
//         }],
//         health_records: [{
//             status: {type: String, default: null},
//             weight: {type: Number, default: null},
//             record_date: {type: Date, default: null}
//         }],
//         feedingStation: {type: String, default: null},
//         feedingLogs: {type: [String]},
//         user: {type: String, default: null}

// import user from '#~/model/user.js'
// import {} from 'dotenv/config'
// import jwt from 'jsonwebtoken'

// const access_token_key = process.env.ACCESS_TOKEN_KEY

// async function getInfo(accessToken) {
// 	try {

// 		var {user_id, session_id} = jwt.verify(accessToken, access_token_key)
// 		var userRecord = (await user.findOne({_id: user_id}).select('-password')).toObject()

// 		this.userInfo = userRecord //this object isinstance of class UserService

// 		return userRecord
// 	} catch (err) {
// 		return Promise.reject({status: 401, message: 'Unauthorized'})
// 	}
// }
// export default getInfo
