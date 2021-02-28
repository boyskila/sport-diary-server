import React from 'react'
import { Provider } from 'react-redux'
import { Request, Response, Router } from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import assets from '../../client-assets.json'
import store from '../createStore'
import user from '../routes/user'

import App from '../shared/App'

export const createTemplate = (req: Request, res: Response) => {
  const template = `
    <!DOCTYPE html>
      <head></head>
      <body>
        <div id="root">${renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url}>
              <App />
            </StaticRouter>
          </Provider>
        )}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(
            store.getState()
          ).replace(/</g, '\\u003c')}
        </script>
        <script src="${assets.main.js}"></script>
      </body>
    </html>
  `
  res.send(template)
}

// used from webpack-hot-server-middleware
export default () => {
  const router = Router()
  return router.use('/auth', user).get('*', createTemplate)
}
