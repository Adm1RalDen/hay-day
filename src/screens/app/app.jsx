import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Layout from '../../components/layout/layout'
import Welcome from '../welcome/welcome'
import 'antd/dist/antd.css'
import NewUser from '../new-user/new-user'

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/new-user/:userId" exact>
            <NewUser />
          </Route>
        </Switch>
      </Router>
    </Layout>
  )
}

export default App
