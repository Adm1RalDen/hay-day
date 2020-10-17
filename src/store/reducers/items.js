const InitiaItemsState = {
}

export const ITEMS_ACTIONS = {
  CHANGE_ITEM: 'item/CHANGE_ITEM',
}

const items = (state = InitiaItemsState, action) => {
  switch (action.type) {
    case ITEMS_ACTIONS.CHANGE_ITEM:
      return { ...state }

    default:
      return state
  }
}

export default items
