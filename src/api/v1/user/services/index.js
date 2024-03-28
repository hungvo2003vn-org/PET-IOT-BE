import register from './register.js'
import login from './login.js'
import createToken from './createToken.js'
import refreshAccessToken from './refreshAccessToken.js'
import getInfo from './getInfo.js'

class UserService {
	userInfo = null;	//later getUserInfo will assign to userInfo
	register = register
	login = login
	createToken = createToken
	refreshAccessToken = refreshAccessToken
	getInfo = getInfo
}

export default UserService