import { createAction } from 'redux-actions'
import { createRoutine } from 'redux-saga-routines'

const namespace = 'BEERS'
const types = {
  LIST: `${namespace}/LIST`,
  REQUEST_MORE: `${namespace}/REQUEST_MORE`,
}

export const actions = {
  requestBeers: createRoutine(types.LIST),
}
