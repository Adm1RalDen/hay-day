import React from 'react'
import { Input } from 'antd'
import {
  Label,
  NewUser,
  UserDataForm,
  Item,
  ItemImg,
  ItemsContainer,
  SubmitForm,
} from '../../styles/new-user'
import { Title } from '../../styles/title'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import {
  ChangeAccountLevel,
  ChangeItemCounts,
  ChangeUserAccountName,
} from '../../store/actions/users.actions'
import StorageService from '../../services/local-storage'

const NewUserPage = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.users.usersData)
  const params = useParams()
  const history = useHistory()
  const storage = StorageService.getInstance()

  const currentUser = data.find((e) => e.id === params.userId)

  const handleChangeUserName = (e) => {
    dispatch(ChangeUserAccountName(e.target.value, currentUser.index))
  }

  const handleChangeLevel = (e) => {
    dispatch(ChangeAccountLevel(e.target.value, currentUser.index))
  }

  const handleChangeItemCounts = (itemIndex) => (e) => {
    dispatch(ChangeItemCounts(e.target.value, currentUser.index, itemIndex))
  }

  const SaveData = (e) => {
    e.preventDefault()
    storage.saveUsersData(data)
    storage.setIsShowMainPage(true)
    history.push('/main')
  }

  return currentUser ? (
    <NewUser>
      <Title>Новий акаунт</Title>
      <UserDataForm onSubmit={SaveData}>
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
                <input
                  type="number"
                  pattern="[0-9]*"
                  max={10000}
                  value={currentUser.items[index].count}
                  onChange={handleChangeItemCounts(index)}
                />
              </Item>
            )
          })}
        </ItemsContainer>
        <SubmitForm type="submit">Зберегти</SubmitForm>
      </UserDataForm>
    </NewUser>
  ) : (
    <Redirect to="/" />
  )
}

export default NewUserPage
