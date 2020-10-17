import React from 'react'
import { Input } from 'antd'
import {
  Label,
  NewUser,
  UserDataForm,
  Item,
  ItemImg,
} from '../../styles/new-user'
import { Title } from '../../styles/title'
import { useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'

const NewUserPage = (props) => {
  const data = useSelector((state) => state.users.usersData)
  const params = useParams()

  const currentUser = data.find((e) => e.id === params.userId)

  return currentUser ? (
    <NewUser>
      <Title>Add new user</Title>
      <UserDataForm>
        <Label>Назва акаунту:</Label>
        <Input />
        <Label>Рівень:</Label>
        <Input type="number" />
        {currentUser.items.map((item) => {
          return (
            <Item>
              <ItemImg src={`/img/${item.name}.png`} />
            </Item>
          )
        })}
      </UserDataForm>
    </NewUser>
  ) : (
    <Redirect to="/" />
  )
}

export default NewUserPage
