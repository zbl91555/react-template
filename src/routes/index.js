import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    )
  }
}
