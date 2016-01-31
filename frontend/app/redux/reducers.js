import { combineReducers } from 'redux'

export const posts = function(state=[], action) {
  switch (action.type) {
    case "RECEIVE_POST":
      return action.payload
    default:
      return state
  }
}

export default combineReducers({posts})
