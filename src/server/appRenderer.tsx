import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../shared/App'

const createAppTemplate = (content: string) => {
  return `
    <!DOCTYPE html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}

export default (url: string) => {
  return createAppTemplate(
    renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    )
  )
}
