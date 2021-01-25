import express from 'express'
import dotenv from 'dotenv'
import { preparation } from './models/mock-programs/preparation'

dotenv.config()

const app = express()
const { PORT } = process.env

app.get('/', (_, res) => {
  res.json(preparation)
})

app.listen(PORT, () => {
  console.log('Server is running at port: ', PORT)
})
