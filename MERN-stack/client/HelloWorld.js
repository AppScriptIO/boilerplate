import { hot } from 'react-hot-loader'
import React, { Component } from 'react'

class HelloWorld extends Component { 
  render() { 
    return ( <div> <h1> Hello World ! </h1> </div> )
  }
}

export default hot(module)(HelloWorld)
