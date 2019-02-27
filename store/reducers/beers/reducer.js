import { actions } from 'reducers/beers/actions'
import { handleActions } from 'redux-actions'
import { get } from 'lodash'

const initialState = {
  beers: [],
  page: 1,
  numberOfPages: 10,
}

const reducer = {
  [actions.requestBeers.trigger]: (state, action) => ({
    ...state,
    isFetchingBeers: true,
  }),
  [actions.requestBeers.success]: (state, action) => ({
    ...state,
    ...action.payload,
    isFetchingBeers: false,
  }),
  [actions.requestBeers.failure]: (state, action) => ({
    ...state,
    error: get(action.payload.error),
    isFetchingBeers: false,
  }),
}

export default handleActions(reducer, initialState)
