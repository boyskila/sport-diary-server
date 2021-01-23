import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const { PORT } = process.env

app.get('/', (_, res) => {
  res.send('Landing page')
})

app.listen(PORT, () => {
  console.log('Server is running at port: ', PORT)
})
