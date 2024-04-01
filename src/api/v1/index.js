import {Router} from 'express'
import user_router from './user/index.js'
import pet_router from './pet/index.js'
const ver1_router = Router()
ver1_router.use('/user', user_router)
ver1_router.use('/pet', pet_router)
export default ver1_router