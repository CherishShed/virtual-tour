import express from 'express'
import 'dotenv/config'
import EventController from '../Controller/EventController'
import UserController from '../Controller/UserController'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Good' })
})

router.get('/events', EventController.getEvents)
router.post('/events', EventController.createEvent)
router.post('/student', UserController.createStudent)
router.get('/student', UserController.getSingleStudent)
router.get('/students', UserController.getStudents)
export default router
