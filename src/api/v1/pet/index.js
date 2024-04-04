import { Router } from 'express'

import createPet from './controllers/createPet.js'
import addMedicalRecords from './controllers/addMedicalRecords.js'
import getMedicalRecords from './controllers/getMedicalRecords.js'
import editMedicalRecords from './controllers/editMedicalRecords.js'
import addMedicines from './controllers/addMedicines.js'
import editMedicines from './controllers/editMedicines.js'
import { authenticate } from '#~/middleware/userAuth.js'

const pet_router = Router()

pet_router.post('/createPet', authenticate, createPet)
pet_router.post('/addMedicalRecords', authenticate, addMedicalRecords)
pet_router.get('/getMedicalRecords', authenticate, getMedicalRecords)
pet_router.put('/editMedicalRecords', authenticate, editMedicalRecords)
pet_router.post('/addMedicines', authenticate, addMedicines)
pet_router.put('/editMedicines', authenticate, editMedicines)
export default pet_router
