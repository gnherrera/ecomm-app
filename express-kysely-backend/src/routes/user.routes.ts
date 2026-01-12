import { Router } from 'express'
import { UserRepository } from '../repositories/user.repository'
import { UserService } from '../services/user.service'
import { UserController } from '../controllers/user.controller'
import { db } from '../db/database'

const router = Router()

const userRepo = new UserRepository(db)
const userService = new UserService(userRepo)
const userController = new UserController(userService)

router.get('/', userController.getUsers)
router.post('/', userController.createUser)

export default router
