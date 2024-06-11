import express from 'express'
import { deleteLayanan, getLayanan, getLayananById, insertLayanan, updateLayanan } from '../controller/layanan.js'

const router = express.Router()

router.get('/layanan', getLayanan)
router.get('/layanan/:id', getLayananById)
router.post('/layanan', insertLayanan)
router.put('/layanan/:id', updateLayanan)
router.delete('/layanan/:id', deleteLayanan)


export default router
