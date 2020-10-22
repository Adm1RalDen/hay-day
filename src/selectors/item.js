export const getItemByIdSelector = (state, id) => state.items[id]
export const getItemByNameSelector = name => state => state.items.find(el => el.name === name)