import { createStore, compose } from 'redux'
import rootReducer from './reducers'

const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)
const store = createStore(rootReducer, {}, enhancer)

export default store
