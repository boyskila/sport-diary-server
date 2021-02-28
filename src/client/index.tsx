import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from '../shared/App'
import store from '../createStore'

const root = document.querySelector('#root')

const render = (Component = App) => {
  return hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    root
  )
}

render()

if (module.hot) {
  module.hot.accept('../shared/App', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nextApp = require('../shared/App').default
    render(nextApp)
  })
}
