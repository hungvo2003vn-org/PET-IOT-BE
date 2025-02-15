import jwt from 'jsonwebtoken'
import {} from 'dotenv/config'
import getInfo from '#~/api/v1/user/services/getInfo.js'
import UserService from '#~/api/v1/user/services/index.js'

const access_token_key = process.env.ACCESS_TOKEN_KEY

export const authenticate = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(' ')[1]
		var {user_id, session_id} = jwt.verify(accessToken, access_token_key)
        req.userService = new UserService()
        req.userService.userInfo = await getInfo(accessToken)
        next()
    } catch (err) {
        console.log(err)
        next({status: 401, message: 'Unauthenticated. Please login or verify the access token'})
    }
}

export const authorize = async (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.userInfo.role)) {
            next({status: 403, message: `You don't have permission to access this route`})
        }
        next()
    }
}