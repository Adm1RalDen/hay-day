export const USERS_ACTIONS = {
  ADD_USER: 'users/ADD_USER',
  CHANGE_ACCOUNT_NAME: 'users/CHANGE_ACCOUNT_NAME',
  CHANGE_ACCOUNT_LEVEL: 'users/CHANGE_ACCOUNT_LEVEL',
  CHANGE_ITEM_COUNTS: 'users/CHANGE_ITEM_COUNTS',
}

export const AddNewUser = (id) => ({
  type: USERS_ACTIONS.ADD_USER,
  id,
})

export const ChangeUserAccountName = (name, index) => ({
  type: USERS_ACTIONS.CHANGE_ACCOUNT_NAME,
  newName: name,
  index,
})

export const ChangeAccountLevel = (level, index) => ({
  type: USERS_ACTIONS.CHANGE_ACCOUNT_LEVEL,
  level,
  index,
})

export const ChangeItemCounts = (counts, indexAcc, indexItm) => ({
  type: USERS_ACTIONS.CHANGE_ITEM_COUNTS,
  counts,
  indexAcc,
  indexItm,
})
