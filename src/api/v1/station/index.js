import {Router} from 'express'
import createStation from './controllers/createStation.js'
import editStation from './controllers/editStation.js'
import {authenticate} from '#~/middleware/userAuth.js'

const station_router = Router()
station_router.post('/create', authenticate, createStation)
station_router.post('/edit', authenticate, editStation)

export default station_router