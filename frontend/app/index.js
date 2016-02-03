import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from 'redux/store'
import { Provider, connect } from 'react-redux'
import { getCurrentUser } from 'redux/actions'

import reset from 'styles/reset'

import Home from 'components/Home'
import ProfileShow from 'components/ProfileShow'
import PostShow from 'components/PostShow'
import PostNew from 'components/PostNew'
import UserLogin from 'components/UserLogin'
import UserNew from 'components/UserNew'
import Navbar from 'components/Navbar'

const App = React.createClass({
  componentDidMount() {
    this.props.dispatch(getCurrentUser())
  },
  render() {
    return (
      <div>
        <Navbar currentUser={this.props.currentUser} />
        { this.props.children }
      </div>
    )
  }
})

const select = function(state) {
  return {
    currentUser: state.currentUser
  }
}

const WrappedApp = connect(select)(App)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={WrappedApp}>
        <IndexRoute component={Home} />
        <Route path="profile" component={ProfileShow} />
        <Route path="post" component={PostShow} />
        <Route path="new" component={PostNew} />
        <Route path="login" component={UserLogin} />
        <Route path="register" component={UserNew} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'))
