import { postIndexData } from 'config/seeds.js'

const fetchPosts = function() {
  return {
    type: 'RECEIVE_POST',
    payload: postIndexData
  }
}

const logout = function() {
  delete localStorage.phoenix_auth_token
  return {
    type: 'LOG_OUT'
  }
}

const getCurrentUser = function() {
  fetch("http://localhost:4000/")
  .then(function() {
    return {
      type: "GET_CURRENT_USER",
      payload: {
        email: "email@email.com",
        username: "username"
      }
    }
  }).catch(function() {
    return {
      type: "GET_CURRENT_USER_ERROR",
      payload: {}
    }
  })
}

// Actions.getCurrentUser = function getCurrentUser() {
//   return dispatch => {
//     axios.get('http://localhost:4000/api/v1/current_user', {
//       headers: {'Authorization': localStorage.phoenix_auth_token},
//       params: {
//         jwt: localStorage.phoenix_auth_token
//       }
//     })
//       .then(function (response) {
//         if (response.status === 200) {
//           dispatch({
//             type: 'CURRENT_USER',
//             user: response.data.data
//           })
//         } else {
//           dispatch({
//             type: 'NOT_LOGGED_IN'
//           })
//         }
//       })
//       .catch(function(response) {
//         console.log("Not logged in.");
//         dispatch({
//             type: 'NOT_LOGGED_IN'
//           })
//       });
//
//   }
// }



export { fetchPosts, logout, getCurrentUser }
