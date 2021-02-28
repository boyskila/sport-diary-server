import { Action, Reducer } from 'redux'

export interface UserState {
  username?: string
  email?: string
  gravatar?: string
  diary?: any[]
}

export interface Authenticate extends Action<'Authenticate'> {
  payload: {
    email: string
    password: string
  }
}
export interface Authenticated extends Action<'Authenticated'> {
  payload: UserState
}

export type UserActions = Authenticate | Authenticated

export const actionTypes = {
  AUTHENTICATED: 'AUTHENTICATED',
  AUTHENTICATE: 'AUTHENTICATE',
  AUTHENTICATION_FAILED: 'AUTHENTICATION_FAILED'
}

export const authenticate = (username: string, password: string) => {
  return {
    type: actionTypes.AUTHENTICATE,
    payload: { username, password }
  }
}

export const authenticated = (user: UserState) => {
  return {
    type: actionTypes.AUTHENTICATED,
    payload: user
  }
}
export const authenticationFailed = (message: string) => {
  return {
    type: actionTypes.AUTHENTICATION_FAILED,
    payload: message
  }
}

const reducer: Reducer<UserState, UserActions> = (state = {}, action) => {
  console.log('uuuuuuuuuuuu', action)

  switch (action.type) {
    case actionTypes.AUTHENTICATE:
      return state
    case actionTypes.AUTHENTICATED:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default reducer
