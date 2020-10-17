const InitialUserState = {
  usersData: [],
}

export const USERS_ACTIONS = {
  ADD_USER: 'users/ADD_USER',
}

const users = (state = InitialUserState, action) => {
  switch (action.type) {
    case USERS_ACTIONS.ADD_USER:
      return { ...state }

    default:
      return state
  }
}

export default users
