import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Layout from '../../components/layout/layout'
import Welcome from '../welcome/welcome'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <Layout>
      <Router history={createHistory()}>
        <Route path="/" components={Welcome} />
      </Router>
    </Layout>
  )
}

export default App
