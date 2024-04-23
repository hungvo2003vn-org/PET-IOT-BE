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
import getPets from './controllers/getAllPet.js'
import getPetById from './controllers/getPetById.js'
import editPet from './controllers/editPet.js'
import getFeedingRecord from './controllers/getFeedingRecord.js'
import { authenticate } from '#~/middleware/userAuth.js'

const pet_router = Router()

pet_router.post('/create', authenticate, createPet)
pet_router.post('/medical', authenticate, addMedicalRecords)
pet_router.get('/medical', authenticate, getMedicalRecords)
pet_router.put('/medical', authenticate, editMedicalRecords)
pet_router.post('/medicine', authenticate, addMedicines)
pet_router.put('/medicine', authenticate, editMedicines)
pet_router.get('/medicine', authenticate, getMedicines)
pet_router.post('/health', authenticate, addHealthRecords)
pet_router.put('/health', authenticate, editHealthRecords)
pet_router.get('/health', authenticate, getHealthRecords)
pet_router.get('/get', authenticate, getPets)
pet_router.get('/:petId', authenticate, getPetById)
pet_router.put('/edit', authenticate, editPet)
pet_router.get('/:pet_id/feed', authenticate, getFeedingRecord)
export default pet_router
