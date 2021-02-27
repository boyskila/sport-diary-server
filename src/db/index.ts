import { MONGO_URL } from '../../env/utils'
import { connect, connection } from 'mongoose'

export const connectDb = () => {
  return connect(MONGO_URL || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
}

connection.on('connected', () => {
  console.log('mongoose connected to db')
})
connection.on('error', (err) => {
  console.log(err.message)
})
connection.on('disconnected', () => {
  console.log('disconnected mongoose')
})

process.on('SIGINT', async () => {
  await connection.close()
  process.exit(0)
})
