import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from 'redux/actions'

import CSSModules from 'react-css-modules'
import styles from './styles'

import Post from 'components/Post'

const Home = React.createClass({
  componentDidMount() {
    this.props.dispatch(fetchPosts())
  },
  render() {
    let list = this.props.posts.map( p => <Post key={p.id} {...p} /> )
    return (
      <div>
        {list}
      </div>
    )
  }
})

const select = function(state) {
  return {
    posts: state.posts
  }
}

export { Home }
export default connect(select)(CSSModules(Home, styles))
