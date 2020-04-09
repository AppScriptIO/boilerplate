import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home.js'

class MainRouter extends Component {
  render() {
    return (<div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>)
  }
}

export default MainRouter