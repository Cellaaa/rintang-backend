import express from 'express'
import { deleteKota, getKota, getKotaById, insertKota, updateKota, getKotaTest } from '../controller/kota.js'
import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/kota', getKota)
router.get('/kota/:id', getKotaById)
router.get('/kotafilter', getKotaTest)
router.post('/kota', insertKota)
router.put('/kota/:id', updateKota)
router.delete('/kota/:id', deleteKota)


export default router
