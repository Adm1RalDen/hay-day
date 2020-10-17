import { combineReducers } from 'redux'
import users from './users.reducer'
import items from './items.reducer'

export default combineReducers({
  users,
  items,
})
