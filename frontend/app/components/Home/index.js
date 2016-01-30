import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles'

import Post from 'components/Post'

// TODO temporary until connected to Phoenix backend
import { postIndexData } from 'config/seeds'

export const Home = () => {
  let list = postIndexData.map(function(post) {
    return (
      <Post
        author={post.author}
        key={post.id}
        upvotes={post.upvotes}
        thumbnail={post.thumbnail}
        title={post.title}
        timestamp={post.timestamp}
        comments={post.comments}
      />
    )
  })
  return (
    <div>
      { list }
    </div>
  )
}

export default CSSModules(Home, styles)
