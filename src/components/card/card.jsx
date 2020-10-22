import React from 'react'
import {
  AbsoluteContainer,
  CardContainer,
  Icon,
  RelativeContainer,
  SimpleBlock,
  Text,
  UserBlock,
} from '../../styles/card.js'
import { useSelector } from 'react-redux'
import { getItemByNameSelector } from '../../selectors/item'

export const Card = (props) => {
  const { name, data } = props
  const { icon, rusName } = useSelector(getItemByNameSelector(name))

  return (
    <CardContainer>
      <RelativeContainer number={data.totalCount}>
        <Icon src={icon} size={60} title={rusName} />
      </RelativeContainer>
      {data.inUsersListCount.map((e) => (
        <UserLine
          key={name + e.userName}
          user={e.userName}
          count={e.count}
          level={e.lvl}
        />
      ))}
    </CardContainer>
  )
}

const UserLine = (props) => {
  const { user, count = 0, level = 0 } = props
  return (
    <UserBlock>
      <SimpleBlock>
        <Text style={{ marginRight: 10 }} textShadow>
          {user}
        </Text>
        <Text textShadow>{level}</Text>
      </SimpleBlock>
      <Text textShadow>{count}</Text>
    </UserBlock>
  )
}
