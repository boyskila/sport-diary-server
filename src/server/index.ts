import express from 'express'
import open from 'open'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'

import dotenv from 'dotenv'
dotenv.config()

import config from '../../webpack.dev.config'
import { isDev, PORT } from '../../env/utils'
import { connectDb } from '../db'
import requestHandler from './requestHandler'
import user from '../routes/user'

const app = express()
app.use(express.json())
app.use('auth', user)

if (isDev) {
  const multiCompiler = webpack(config)
  const [clientCompiler] = multiCompiler.compilers

  app
    .use(devMiddleware(multiCompiler as any))
    .use(hotMiddleware(clientCompiler))
    .use(webpackHotServerMiddleware(multiCompiler))
} else {
  app.use(express.static('dist')).use(requestHandler())
}

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log('Server started at port: ', PORT)
    isDev && open(`http://localhost:${PORT}`)
  })
})
