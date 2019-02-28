import beersReducer, {
  actions as beersActions,
  selectors as beersSelectors,
  sagas as rootSagas,
} from 'reducers/beers'
import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import { rootSaga } from 'reducers/beers/sagas'

const sagaMiddleware = createSagaMiddleware()

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

const storeEnhancers = [applyMiddleware(sagaMiddleware)]

const store = createStore(rootReducer, composeEnhancers(...storeEnhancers))

sagaMiddleware.run(rootSagas)

// const store = createStore(rootReducer, composeEnhancers(...storeEnhancers))

// sagaMiddleware.run(rootSagas)

export default store
