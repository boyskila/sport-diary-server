import { combineReducers } from 'redux'
import user, { UserState } from './user'

interface AppState {
  user: UserState
}

export default combineReducers<AppState>({
  user
})
