import React, { Component } from 'react'
import './assets/css/reset.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import store from './store'
import { Provider } from 'mobx-react'
import HttpProvider from './common/HttpProvider'
import { httpInstance } from './service'
import Layout from './components/Layout'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <HttpProvider httpInstance={httpInstance}>
            <Layout>
              <Routes />
            </Layout>
          </HttpProvider>
        </Provider>
      </Router>
    )
  }
}
