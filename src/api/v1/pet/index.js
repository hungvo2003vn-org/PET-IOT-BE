import {Router} from 'express'

import createPet from './controllers/createPet.js'
const pet_router = Router()

pet_router.post('/createPet',createPet)
export default pet_router