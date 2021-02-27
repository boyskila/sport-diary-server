import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'

import config from '../../webpack.dev.config'
import requestHandler from './requestHandler'

dotenv.config()

const app = express()
const { PORT, NODE_ENV } = process.env

if (NODE_ENV === 'development') {
  const multiCompiler = webpack(config)
  const [clientCompiler] = multiCompiler.compilers

  app
    .use(devMiddleware(multiCompiler as any))
    .use(hotMiddleware(clientCompiler))
    .use(webpackHotServerMiddleware(multiCompiler))
} else {
  app.use(express.static('dist')).use(requestHandler())
}

app.listen(PORT, () => {
  console.log('Server is running at port: ', PORT)
})
