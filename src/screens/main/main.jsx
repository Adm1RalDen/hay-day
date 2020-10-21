import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../../components/card/card'
import { itemList } from '../../store/reducers/users.reducer'
import { MainPageContainer } from '../../styles/main'


const Main = () => {
  const data = useSelector((state) => state.users.usersData)

  const reduceData = itemList.reduce((prev, curr) => {
    const inUsersListCount = data.map((e) => {
      const foundItem = e.items.find((e) => e.name === curr)
      return {
        userName: e.name,
        count: foundItem ? foundItem.count : 0,
        lvl: e.level,
      }
    })
    prev[curr] = {
      totalCount: inUsersListCount.reduce(
        (pr, crr) => pr + Number(crr.count) || 0,
        0
      ),
      inUsersListCount: inUsersListCount,
    }
    return prev
  }, {})

  return (
    <MainPageContainer>
      {Object.entries(reduceData).map((e) => (
        <Card name={e[0]} data={e[1]} />
      ))}
    </MainPageContainer>
  )
}
export default Main
