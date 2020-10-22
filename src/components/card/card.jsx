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
      <RelativeContainer>
        <Icon src={icon} size={100} title={rusName}/>
        <AbsoluteContainer
          style={{ zIndex: 123, top: '50%', left: '65%' }}
        >
          <Text style={{ width: '100%', fontSize: '2.5em', textShadow: 'black -2.1px 2.3px 1px' }}>{data.totalCount}</Text>
        </AbsoluteContainer>
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
        <Text fs="1.5em" style={{ marginRight: 10 }}>
          {user}
        </Text>
        <RelativeContainer>
          <Icon src="img/lvl.png" size={25}/>
          <AbsoluteContainer
            style={{ zIndex: 123, top: '0.1em', left: '0.45em' }}
          >
            <Text style={{ textShadow: 'black 2px 3px 4px', fontSize: '0.7em' }}>
              {level}
            </Text>
          </AbsoluteContainer>
        </RelativeContainer>
      </SimpleBlock>
      <Text fs="1.5em">{count}</Text>
    </UserBlock>
  )
}
