import {Router} from 'express'

import { createAcronimeHistory, getAcronimeHistory } from '../controllers/Historycontroller'
import { getAcronime } from '../controllers/Acronimecontroller'

const router = Router()

router.post('/history', getAcronimeHistory)

router.post('/acronime', getAcronime)

router.post('/createHistory', createAcronimeHistory)





export default router