import {Router} from 'express'
import createStation from './controllers/createStation.js'
import editStation from './controllers/editStation.js'
import newStation from './controllers/newStation.js'
import getStations from './controllers/getStations.js'
import {authenticate} from '#~/middleware/userAuth.js'

const station_router = Router()
station_router.post('/create', authenticate, createStation)
station_router.post('/edit', authenticate, editStation)
station_router.post('/new', newStation)
station_router.get('/get', authenticate, getStations)

export default station_router