import itemList from '../../constants/itemsList.json'
import rus from '../../constants/rusList.json'

const initialItemsState = itemList.map((el, i) => ({ name: el, icon: `img/${el}.png`, rusName: rus[i], lvlFrom: 0 }))


export const ITEMS_ACTIONS = {
  CHANGE_ITEM: 'item/CHANGE_ITEM'
}

const items = (state = initialItemsState, action) => {
  switch (action.type) {
    case ITEMS_ACTIONS.CHANGE_ITEM:
      return [...state]

    default:
      return state
  }
}

export default items
