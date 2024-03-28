import user from '#~/model/user.js'
import {} from 'dotenv/config'
import jwt from 'jsonwebtoken'

const access_token_key = process.env.ACCESS_TOKEN_KEY

async function getInfo(accessToken) {
	try {

		var {user_id, session_id} = jwt.verify(accessToken, access_token_key)
		var userRecord = (await user.findOne({_id: user_id}).select('-password')).toObject()

		this.userInfo = userRecord //this object isinstance of class UserService

		return userRecord
	} catch (err) {
		return Promise.reject({status: 401, message: 'Unauthorized'})
	}
}
export default getInfo