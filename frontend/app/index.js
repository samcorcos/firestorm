import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import reset from 'styles/reset'

import Home from 'components/Home'
import ProfileShow from 'components/ProfileShow'
import PostShow from 'components/PostShow'
import PostNew from 'components/PostNew'
import UserLogin from 'components/UserLogin'
import UserNew from 'components/UserNew'
import Navbar from 'components/Navbar'

const App = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        { this.props.children }
      </div>
    )
  }
})

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="profile" component={ProfileShow} />
			<Route path="post" component={PostShow} />
			<Route path="new" component={PostNew} />
			<Route path="login" component={UserLogin} />
			<Route path="register" component={UserNew} />
		</Route>
	</Router>
), document.getElementById('root'))
