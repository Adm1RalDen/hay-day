import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Skeleton } from 'antd'

import 'antd/dist/antd.css'

import Layout from '../../components/layout/layout'
import Welcome from '../welcome/welcome'
import NewUser from '../new-user/new-user'
import Main from '../main/main'
import StorageService from '../../services/local-storage'
import { useDispatch } from 'react-redux'
import { SetUsersDataFromStorage } from '../../store/actions/users.actions'

const App = () => {
  const [state, setState] = useState()
  const storage = StorageService.getInstance()
  const dispatch = useDispatch()

  useEffect(() => {
    const { isShowMainPage, usersData } = storage.getStorageData()
    setState(isShowMainPage ? JSON.parse(isShowMainPage) : false)
    if (usersData) {
      dispatch(SetUsersDataFromStorage(JSON.parse(usersData)))
    }
  }, [])

  if (state === undefined) return <Skeleton active />
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact>
            {state ? <Main /> : <Welcome />}
          </Route>
          <Route path="/new-user/:userId" exact>
            <NewUser />
          </Route>
          <Route path="/main" exact>
            <Main />
          </Route>
        </Switch>
      </Router>
    </Layout>
  )
}

export default App
