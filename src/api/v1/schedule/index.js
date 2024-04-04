import {Router} from 'express'
import startFeed from "./controllers/startFeed.js";
import { authenticate } from '#~/middleware/userAuth.js';

const schedule_router = Router()
schedule_router.post('/start', authenticate, startFeed)

export default schedule_router