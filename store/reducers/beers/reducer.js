import { actions } from 'reducers/beers/actions'
import { handleActions } from 'redux-actions'
import { get } from 'lodash'

const initialState = {
  beers: [],
  page: 1,
  numberOfPages: 10,
  favorites: [],
  favoriteIds: [],
  isFetchingFavorites: false,
}

const reducer = {
  // -----------------------------------------------
  // request beers
  // -----------------------------------------------
  [actions.requestBeers.trigger]: (state, action) => ({
    ...state,
    isFetchingBeers: true,
  }),
  [actions.requestBeers.success]: (state, action) => ({
    ...state,
    ...action.payload,
    beers: state.beers.concat(action.payload.beers),
    isFetchingBeers: false,
  }),
  [actions.requestBeers.failure]: (state, action) => ({
    ...state,
    error: get(action, 'payload.error'),
    isFetchingBeers: false,
  }),
  [actions.set]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  // -----------------------------------------------
  // requestfavorites
  // -----------------------------------------------

  [actions.requestFavorites.request]: (state, action) => ({
    ...state,
    isFetchingFavorites: true,
  }),
  [actions.requestFavorites.success]: (state, action) => ({
    ...state,
    ...action.payload,
    isFetchingFavorites: false,
  }),
  [actions.requestFavorites.failure]: (state, action) => ({
    ...state,
    error: get(action, 'payload.error'),
  }),
  // -----------------------------------------------
  // addFavorite
  // -----------------------------------------------
  [actions.addFavorite.success]: (state, { payload = {} }) => {
    const favorites = [...state.favorites, payload]
    return {
      ...state,
      favorites,
      favoriteIds: [...state.favoriteIds, payload.id],
    }
  },
  // -----------------------------------------------
  // addFavorite
  // -----------------------------------------------
  [actions.removeFavorite.success]: (state, { payload = {} }) => {
    return {
      ...state,
      favorites: payload.favorites,
      favoriteIds: payload.favoriteIds,
    }
  },
}

export default handleActions(reducer, initialState)
