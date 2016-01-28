import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

const Navbar = React.createClass({
  render() {
    return (
      <nav>
        <div>
          <h1>LOGO</h1>
          <span>The unofficial news source for the Phoenix Framework.</span>
        </div>
      </nav>
    )
  }
})

export default CSSModules(Navbar, styles)
