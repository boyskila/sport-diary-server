import { Router } from 'express'

const router = Router()

router.post('/login', (req, res) => {
  res.send(JSON.stringify(req.body))
})

export default router
