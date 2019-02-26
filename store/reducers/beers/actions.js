import { createAction } from 'redux-actions'

const namespace = 'BEERS'
const types = {
  REQUEST: `${namespace}/REQUEST`,
  REQUEST_MORE: `${namespace}/REQUEST_MORE`,
}

export const actions = {
  requestBeers: createAction(types.REQUEST),
}
