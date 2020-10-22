import produce from 'immer'
import itemList from '../../constants/itemsList.json'
import { USERS_ACTIONS } from '../actions/users.actions'

const InitialUserState = {
  usersData: [],
}

const users = (state = InitialUserState, action) => {
  switch (action.type) {
    case USERS_ACTIONS.ADD_USER: {
      const newItem = {
        id: action.id,
        index: state.usersData.length,
        name: '',
        level: 0,
        items: itemList.map((e) => ({
          count: 0,
          name: e,
        })),
      }
      return { ...state, usersData: [...state.usersData, newItem] }
    }

    case USERS_ACTIONS.CHANGE_ACCOUNT_NAME: {
      const newUserData = [...state.usersData]
      newUserData[action.index].name = action.newName
      return { ...state, usersData: [...newUserData] }
    }

    case USERS_ACTIONS.CHANGE_ACCOUNT_LEVEL: {
      const newUserData = [...state.usersData]
      const level = Number(action.level)
      newUserData[action.index].level = level ? level : 0
      return { ...state, usersData: [...newUserData] }
    }
    case USERS_ACTIONS.CHANGE_ITEM_COUNTS: {
      return produce(state, (draft) => {
        draft.usersData[action.indexAcc].items[action.indexItm].count =
          action.counts
      })
    }

    case USERS_ACTIONS.SET_USERS_DATA_FROM_STORAGE: {
      return produce(state, (draft) => {
        draft.usersData = JSON.parse(JSON.stringify(action.data))
      })
    }

    default:
      return state
  }
}

export default users
