import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
