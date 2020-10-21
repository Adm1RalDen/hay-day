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

export const Card = (props) => {
  const { name, data } = props

  return (
    <CardContainer>
      <Icon src={`img/${name}.png`} size={100} />
      <Text>{data.totalCount}</Text>
      <Text>{name}</Text>
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
        <Text fs="1.5em" style={{ marginRight: 10 }}>
          {user}
        </Text>
        <RelativeContainer>
          <Icon src="img/lvl.png" size={25} />
          <AbsoluteContainer
            style={{ zIndex: 123, top: '0.6em', left: '0.8em' }}
          >
            <Text fs="1.1em" style={{ textShadow: 'black 2px 3px 4px' }}>
              {level}
            </Text>
          </AbsoluteContainer>
        </RelativeContainer>
      </SimpleBlock>
      <Text fs="1.5em">{count}</Text>
    </UserBlock>
  )
}
