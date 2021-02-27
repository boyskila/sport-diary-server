import React from 'react'
import { Request, Response } from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import assets from '../../client-assets.json'

import App from '../shared/App'

export const createTemplate = (url: string) => {
  return `
    <!DOCTYPE html>
      <head></head>
      <body>
        <div id="root">${renderToString(
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        )}</div>
        <script src="${assets.main.js}"></script>
      </body>
    </html>
  `
}

// used from webpack-hot-server-middleware
export default () => {
  return (req: Request, res: Response) => {
    res.send(createTemplate(req.url))
  }
}
