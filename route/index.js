import express from 'express'
import kotaRoute from '../route/kota.route.js'
import layananRoute from '../route/layanan.router.js'
import provinsiRoute from '../route/provinsi.router.js'

const router = express()

router.use(kotaRoute)
router.use(layananRoute)
router.use(provinsiRoute)


export default router