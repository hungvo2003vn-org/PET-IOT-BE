import {Router} from 'express'
import startFeed from "./controllers/startFeed.js";
import stopFeed from './controllers/stopFeed.js';
import createSchedule from './controllers/createSchedule.js';
import { authenticate } from '#~/middleware/userAuth.js';

const schedule_router = Router()
schedule_router.post('/start', authenticate, startFeed)
schedule_router.post('/stop', authenticate, stopFeed)
schedule_router.post('', authenticate, createSchedule)

export default schedule_router