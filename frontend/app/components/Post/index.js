import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles'

export const Post = React.createClass({
  render() {
    return (
      <div styleName="post">
        <div>
          <img styleName="profile" src={ this.props.author.profile } />
        </div>
        <div styleName="voting">
          <div styleName="arrow-up"></div>
          <div styleName="votes">{ this.props.upvotes }</div>
          <div styleName="arrow-down"></div>
        </div>
        <div>
          <img styleName="thumbnail" src={ this.props.thumbnail } />
        </div>
        <div>
          <h3>{this.props.title}</h3>
          <p>
            Submitted by <strong><a href="#">{ this.props.author.username }</a></strong> { this.props.timestamp } milliseconds ago.
          </p>
          <p><a href="#">{ this.props.comments } comments</a> | <a href="#">share</a></p>
        </div>
      </div>
    )
  }
})

export default CSSModules(Post, styles)
