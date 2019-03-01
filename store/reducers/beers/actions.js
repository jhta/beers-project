import { createAction } from 'redux-actions'
import { createRoutine } from 'redux-saga-routines'

const namespace = 'BEERS'
const types = {
  LIST: `${namespace}/LIST`,
  REQUEST_MORE: `${namespace}/REQUEST_MORE`,
  SET: `${namespace}/SET`,
  REQUEST_FAVORITES: `${namespace}/GET_FAVORITES`,
  ADD_FAVORITE: `${namespace}/ADD_FAVORITE`,
  REMOVE_FAVORITE: `${namespace}/REMOVE_FAVORITE`,
}

export const actions = {
  requestBeers: createRoutine(types.LIST),
  set: createAction(types.SET),
  requestFavorites: createRoutine(types.REQUEST_FAVORITES),
  addFavorite: createRoutine(types.ADD_FAVORITE),
  removeFavorite: createRoutine(types.REMOVE_FAVORITE),
}
