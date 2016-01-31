import { postIndexData } from 'config/seeds.js'

export const fetchPosts = function() {
  return {
    type: "RECEIVE_POST",
    payload: postIndexData
  }
}
