import {Router} from 'express'
import createStation from './controllers/createStation.js'
import editStation from './controllers/editStation.js'
import newStation from './controllers/newStation.js'
import getStations from './controllers/getStations.js'
import {authenticate} from '#~/middleware/userAuth.js'
import assignPet from './controllers/assignPet.js'

const station_router = Router()
station_router.post('/create', authenticate, createStation)
station_router.post('/edit', authenticate, editStation)
station_router.post('/new', newStation)
station_router.get('/get', authenticate, getStations)
station_router.post('/assign', authenticate, assignPet)

export default station_router