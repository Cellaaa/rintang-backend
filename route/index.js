import express from 'express'
import kotaRoute from '../route/kota.route.js'
import layananRoute from '../route/layanan.router.js'
import provinsiRoute from '../route/provinsi.router.js'
import authRoute from '../route/auth.route.js'
import { authenticateToken } from '../middleware/validate.middleware.js'


const router = express()

router.use(authRoute)

router.use(authenticateToken)
router.use(provinsiRoute)
router.use(kotaRoute)
router.use(layananRoute)






export default router