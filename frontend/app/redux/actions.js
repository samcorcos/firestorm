import { postIndexData } from 'config/seeds.js'

const RECEIVE_POST = 'RECEIVE_POST'

export const fetchPosts = function() {
  return {
    type: RECEIVE_POST,
    payload: postIndexData
  }
}
