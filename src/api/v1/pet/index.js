import { Router } from 'express'

import createPet from './controllers/createPet.js'
import getPetbyUser from './controllers/getPetbyUser.js'
import getPetbyId from './controllers/getPetById.js'
import createRecord from './controllers/createRecord.js'
import getRecord from './controllers/getRecord.js'
import editRecord from './controllers/editRecord.js'
const pet_router = Router()

pet_router.post('/createPet', createPet)
pet_router.get('/getPetbyUser', getPetbyUser)
pet_router.get('/getPetbyId', getPetbyId)
pet_router.post('/createRecord', createRecord)
pet_router.get('/getRecord', getRecord)
pet_router.put('/editRecord', editRecord)
export default pet_router
