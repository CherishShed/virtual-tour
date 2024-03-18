import mongoose from 'mongoose'
import 'dotenv/config'

mongoose.set('strictQuery', true)
export const connectToDatabase = async () => {
  mongoose
    .connect(process.env.CONNECTION_STRING! as string, {
      dbName: 'eaze',
      connectTimeoutMS: 40000,
    })
    .then(() => {
      console.log('Database Connection Succeeded')
    })
    .catch(err => {
      console.log(`An error occurred connecting to database: ${err}`)
    })
}
mongoose.connection.on('error', err => {
  console.log(
    `An error occurred connecting to database: ${err},\n...reconnecting`
  )
  connectToDatabase()
})
export interface studentType extends Document {
  matricNumber: string
  firstName: string
  lastName: string
  email: string
}

export interface eventType extends Document {
  name: string
  eventLocation: string
  startTime: string
  endTime: string
  date: string
  description: string
}

const EventSchema = new mongoose.Schema<eventType>({
  name: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const StudentSchema = new mongoose.Schema<studentType>({
  matricNumber: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})
export const Student = mongoose.model<studentType>('Student', StudentSchema)
export const Event = mongoose.model<eventType>('Event', EventSchema)
