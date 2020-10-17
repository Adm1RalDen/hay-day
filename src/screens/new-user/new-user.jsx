import React from 'react'
import { Input, InputNumber } from 'antd'
import {
  Label,
  NewUser,
  UserDataForm,
  Item,
  ItemImg,
  ItemsContainer,
} from '../../styles/new-user'
import { Title } from '../../styles/title'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import {
  ChangeAccountLevel,
  ChangeItemCounts,
  ChangeUserAccountName,
} from '../../store/actions/users.actions'

const NewUserPage = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.users.usersData)
  const params = useParams()

  const currentUser = data.find((e) => e.id === params.userId)

  const handleChangeUserName = (e) => {
    dispatch(ChangeUserAccountName(e.target.value, currentUser.index))
  }

  const handleChangeLevel = (e) => {
    dispatch(ChangeAccountLevel(e.target.value, currentUser.index))
  }

  const handleChangeItemCounts = (itemIndex) => (e) => {
    dispatch(ChangeItemCounts(e, currentUser.index, itemIndex))
  }

  // TODO переробити на варіант без екшенів на кону зміну, сберігати данні при збереженні форми!

  return currentUser ? (
    <NewUser>
      <Title>Новий акаунт</Title>
      <UserDataForm>
        <Label>Назва акаунту:</Label>
        <Input value={currentUser.name} onChange={handleChangeUserName} />
        <Label>Рівень:</Label>
        <Input
          type="text"
          pattern="[0-9]*"
          value={currentUser.level}
          onChange={handleChangeLevel}
        />
        <ItemsContainer>
          {currentUser.items.map((item, index) => {
            return (
              <Item key={item.name}>
                <ItemImg src={`/img/${item.name}.png`} alt={item.name} />
                <InputNumber
                  max={10000}
                  pattern="[0-9]*"
                  min={0}
                  value={currentUser.items[index].count}
                  onChange={handleChangeItemCounts(index)}
                />
              </Item>
            )
          })}
        </ItemsContainer>
      </UserDataForm>
    </NewUser>
  ) : (
    <Redirect to="/" />
  )
}

export default NewUserPage
