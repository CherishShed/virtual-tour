import { Event } from '../Model/database'
import { Request, Response } from 'express'

const EventController = {
  createEvent: async (req: Request, res: Response) => {
    const { name, eventLocation, startTime, endTime, date, description } =
      req.body
    Event.create({ name, eventLocation, startTime, endTime, date, description })
      .then(result => {
        res.status(201).json({ result, message: 'success' })
      })
      .catch(err => {
        res.status(500).json({ error: err, message: 'An error occured' })
      })
  },

  getEvents: async (req: Request, res: Response) => {
    const currentDate = new Date()
    Event.find()
      .then(result => {
        const events = result.filter(
          event => new Date(event.date) >= currentDate
        )
        res.status(200).json({ events, message: 'success' })
      })
      .catch(err => {
        res.status(500).json({ error: err, message: 'An error occured' })
      })
  },
}

export default EventController
