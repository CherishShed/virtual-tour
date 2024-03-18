import 'dotenv/config'
import app from './Middleware/expressMiddleware'
import { connectToDatabase } from './Model/database'
import router from './Routers/router'

app.use('/api', router)
const startServer = async () => {
  await connectToDatabase()
  app.listen(8081, () => {
    console.log('listening on 8081')
  })
}

startServer()
