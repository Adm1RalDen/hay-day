import React from 'react'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'

import { Welcome } from '../../styles/welcome.js'
import { Link } from 'react-router-dom'
import { Title } from '../../styles/title'
import { AddNewUser } from '../../store/actions/users.actions.js'
import generateUserId from '../../utils/generateUserId'

const WelcomePage = () => {
  const dispatch = useDispatch()
  const userId = generateUserId()

  const handleClickToBtn = () => {
    dispatch(AddNewUser(userId))
  }

  return (
    <Welcome>
      <Title>Привіт сударь</Title>
      <Link to={`/new-user/${userId}`}>
        <Button
          type="danger "
          title="Add your account"
          onClick={handleClickToBtn}
        >
         Добавити акаунт
        </Button>
      </Link>
    </Welcome>
  )
}

export default WelcomePage
