import {Router} from 'express'
import user_router from './user/index.js'
import station_router from './station/index.js'

const ver1_router = Router()
ver1_router.use('/user', user_router)
ver1_router.use('/station', station_router)

export default ver1_router