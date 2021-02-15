import express from 'express'
import dotenv from 'dotenv'
import appRenderer from './appRenderer'

dotenv.config()

const app = express()
const { PORT } = process.env

app.use(express.static('./dist'))

app.get('*', (req, res) => {
  const content = appRenderer(req.url)
  res.send(content)
})

app.listen(PORT, () => {
  console.log('Server is running at port: ', PORT)
})
