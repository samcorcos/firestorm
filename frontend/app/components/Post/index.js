import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles'

export const Post = (props) => {
  return (
    <div styleName="post">
      <div>
        <img styleName="profile" src={ props.author.profile } />
      </div>
      <div styleName="voting">
        <div styleName="arrow-up"></div>
        <div styleName="votes">{ props.upvotes }</div>
        <div styleName="arrow-down"></div>
      </div>
      <div>
        <img styleName="thumbnail" src={ props.thumbnail } />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>
          Submitted by <strong><a href="#">{ props.author.username }</a></strong> { props.timestamp } milliseconds ago.
        </p>
        <p><a href="#">{ props.comments } comments</a> | <a href="#">share</a></p>
      </div>
    </div>
  )
}

export default CSSModules(Post, styles)
