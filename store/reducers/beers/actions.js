import { createAction } from 'redux-actions'
import { createRoutine } from 'redux-saga-routines'

const namespace = 'BEERS'
const types = {
  LIST: `${namespace}/LIST`,
  REQUEST_MORE: `${namespace}/REQUEST_MORE`,
  SET: `${namespace}/SET`,
}

export const actions = {
  requestBeers: createRoutine(types.LIST),
  set: createAction(types.SET),
}
