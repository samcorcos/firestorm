import assert from 'assert'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Home } from './'

describe("Home unit tests", function() {
  it("Karma should not break", function() {
    assert(true)
  })
  it("should render Home component", function() {
    const renderer = TestUtils.createRenderer()
    renderer.render( <Home /> )
    const home = renderer.getRenderOutput()
    assert(home.type === "div")
  })
})
