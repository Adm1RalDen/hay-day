import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Layout from '../../components/layout/layout'
import Welcome from '../welcome/welcome'
import 'antd/dist/antd.css'

const history = createBrowserHistory()

const App = () => {
  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route path="/" components={Welcome} />
        </Switch>
      </Router>
      <Welcome />
    </Layout>
  )
}

export default App
