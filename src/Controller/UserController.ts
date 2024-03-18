import { Student } from '../Model/database'
import { Request, Response } from 'express'

const UserController = {
  createStudent: async (req: Request, res: Response) => {
    const { matricNumber, firstName, lastName, email } = req.body
    Student.create({ matricNumber, firstName, lastName, email })
      .then(result => {
        res.status(201).json({ result, message: 'success' })
      })
      .catch(err => {
        res.status(500).json({ error: err, message: 'An error occured' })
      })
  },
  getSingleStudent: async (req: Request, res: Response) => {
    const { matricNumber } = req.query
    try {
      const student = await Student.findOne({
        matricNumber: matricNumber as string,
      })
      if (!student) {
        return res.status(404).json({ message: 'Student not found' })
      }
      return res.status(200).json({ message: 'Successful', student })
    } catch (error) {
      return res.status(500).json({ error, message: 'An error occured' })
    }
  },
}

export default UserController
