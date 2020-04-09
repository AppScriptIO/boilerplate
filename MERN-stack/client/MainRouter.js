import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home.js'
import Users from './user/Users.js'

class MainRouter extends Component {
  render() {
    return (<div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>)
  }
}

export default MainRouter