import express from 'express'
import { deleteProvinsi, getProvinsi, getProvinsiById, insertProvinsi, updateProvinsi } from '../controller/provinsi.js'

const router = express.Router()

router.get('/provinsi', getProvinsi)
router.get('/provinsi/:id', getProvinsiById)
router.post('/provinsi', insertProvinsi)
router.put('/provinsi/:id', updateProvinsi)
router.delete('/provinsi/:id', deleteProvinsi)


export default router
