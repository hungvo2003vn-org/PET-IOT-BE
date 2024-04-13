import { Router } from 'express'

import createPet from './controllers/createPet.js'
import addMedicalRecords from './controllers/addMedicalRecords.js'
import getMedicalRecords from './controllers/getMedicalRecords.js'
import editMedicalRecords from './controllers/editMedicalRecords.js'
import addMedicines from './controllers/addMedicines.js'
import editMedicines from './controllers/editMedicines.js'
import getMedicines from './controllers/getMedicines.js'
import addHealthRecords from './controllers/addHealthRecords.js'
import editHealthRecords from './controllers/editHealthRecords.js'
import getHealthRecords from './controllers/getHealthRecords.js'

import { authenticate } from '#~/middleware/userAuth.js'

const pet_router = Router()

pet_router.post('/createPet', authenticate, createPet)
pet_router.post('/addMedicalRecords', authenticate, addMedicalRecords)
pet_router.get('/getMedicalRecords', authenticate, getMedicalRecords)
pet_router.put('/editMedicalRecords', authenticate, editMedicalRecords)
pet_router.post('/addMedicines', addMedicines)
pet_router.put('/editMedicines', editMedicines)
pet_router.get('/getMedicines', getMedicines)
pet_router.post('/addHealthRecords', addHealthRecords)
pet_router.put('/editHealthRecords', editHealthRecords)
pet_router.get('/getHealthRecords', getHealthRecords)
export default pet_router
