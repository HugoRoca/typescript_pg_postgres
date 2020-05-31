import { Router } from 'express'
import { getUser } from '../controllers/index.controller'

const router = Router()

router.get('/users', getUser)

export default router
