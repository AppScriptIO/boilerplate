import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class HelloWorld extends Component { 
  render() { 
    return ( <div> <h1> Hello everybody
   ! </h1> </div> )
  }
}

if (module.hot) {
    module.hot.accept();
}


export default hot(module)(HelloWorld)
