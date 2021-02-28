import fetch from 'isomorphic-fetch'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  Authenticate,
  authenticated,
  actionTypes,
  authenticationFailed
} from '../reducers/user'

export function* authenticate(action: Authenticate) {
  try {
    const response = yield call(fetch, '/auth/login', {
      body: JSON.stringify(action.payload),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    const result = yield response.json()

    yield put(authenticated(result))
  } catch (e) {
    yield put(authenticationFailed(e.message))
  }
}

export default function* user() {
  yield takeLatest(actionTypes.AUTHENTICATE, authenticate)
}
