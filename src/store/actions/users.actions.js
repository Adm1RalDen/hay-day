export const USERS_ACTIONS = {
  ADD_USER: 'users/ADD_USER',
  CHANGE_USER_DATA: 'users/CHANGE_USER_DATA',
}

export const AddNewUser = (id) => ({
  type: USERS_ACTIONS.ADD_USER,
  id,
})
