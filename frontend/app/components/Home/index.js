import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchPosts } from 'redux/actions'

import CSSModules from 'react-css-modules'
import styles from './styles'

import Post from 'components/Post'

const Home = ({ posts, dispatch }) => {
  let list = posts.map( p => <Post key={p.id} {...p} /> )
  dispatch(fetchPosts())
  return (
    <div>
      { list }
    </div>
  )
}

const select = function(state) {
  return {
    posts: state.posts
  }
}

// TODO figure out a nice way to curry this later

export { Home }
export default connect(select)(CSSModules(Home, styles))
