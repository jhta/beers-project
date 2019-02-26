import beersReducer, {
  actions as beersActions,
  selectors as beersSelectors,
} from 'reducers/beers'
import { combineReducers, compose, createStore } from 'redux'

export const actions = {
  beers: beersActions,
}

export const selectors = {
  beers: beersSelectors,
}

const rootReducer = combineReducers({
  beers: beersReducer,
})

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
/* eslint-enable */

const store = createStore(rootReducer, composeEnhancers())
export default store
