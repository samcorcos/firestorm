import { combineReducers } from 'redux'

const posts = function(state=[], action) {
  switch (action.type) {
    case "RECEIVE_POST":
      return action.payload
    default:
      return state
  }
}

const currentUser = function(state={}, action) {
  switch (action.type) {
    case 'LOG_OUT':
      return {}
    case 'GET_CURRENT_USER':
      return action.payload
    default:
      return {}
  }
}

export { posts, currentUser }
export default combineReducers({ posts, currentUser })
