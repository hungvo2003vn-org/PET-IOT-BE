import {Router} from 'express'
import getInfo from './controllers/getInfo.js'
import login from './controllers/login.js'
import register from './controllers/register.js'
import refreshAccessToken from './controllers/refreshAccessToken.js'
import {authenticate} from '#~/middleware/userAuth.js'

const user_router = Router()
user_router.post('/register', register)
user_router.post('/login', login)
user_router.get('/info', authenticate, getInfo)
user_router.post('/refresh', authenticate, refreshAccessToken)

export default user_router
