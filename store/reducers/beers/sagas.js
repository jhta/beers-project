import { put, takeEvery, all, call, fork } from 'redux-saga/effects'
import { get } from 'lodash'

import { actions } from 'reducers/beers/actions'
import {
  getRandomBeersBypage,
  addBeerToFavorites,
  getFavorites,
  removeBeerFromFavorites,
} from 'services/beer'

//----------------------------------------------------------------

export function* requestListWatcherSaga() {
  yield takeEvery(actions.requestBeers.TRIGGER, requestList)
}

export function* requestList(action) {
  try {
    yield put(actions.requestBeers.request())
    const { data } = yield call(getRandomBeersBypage)

    yield put(actions.requestBeers.success(data))
  } catch (error) {
    yield put(actions.requestBeers.failure(error.message))
  }
}

//----------------------------------------------------------------

export function* requestFavorites(action) {
  try {
    yield put(actions.requestFavorites.request())
    const { data } = yield call(getFavorites)
    yield put(actions.requestFavorites.success(data))
  } catch (error) {
    yield put(actions.requestFavorites.failure(error.message))
  }
}

export function* requestFavoritesWatcherSaga() {
  yield takeEvery(actions.requestFavorites.TRIGGER, requestFavorites)
}

//----------------------------------------------------------------

export function* addToFavorites(action) {
  const beer = get(action, 'payload', {})
  try {
    yield put(actions.addFavorite.request())
    const { data } = yield call(addBeerToFavorites, beer)
    yield put(actions.addFavorite.success(beer))
  } catch (error) {
    yield put(actions.addFavorite.failure(error.message))
  }
}

export function* addToFavoritesWatcherSaga() {
  yield takeEvery(actions.addFavorite.TRIGGER, addToFavorites)
}

//----------------------------------------------------------------

export function* removeFromFavorites(action) {
  console.log('action on saga', action)
  const beer = get(action, 'payload', {})
  try {
    yield put(actions.removeFavorite.request())
    const { data } = yield call(removeBeerFromFavorites, beer)
    yield put(actions.removeFavorite.success(data))
  } catch (error) {
    yield put(actions.removeFavorite.failure(error.message))
  }
}

export function* removeFromFavoritesWatcherSaga() {
  yield takeEvery(actions.removeFavorite.TRIGGER, removeFromFavorites)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield fork(requestListWatcherSaga)
  yield fork(requestFavoritesWatcherSaga)
  yield fork(addToFavoritesWatcherSaga)
  yield fork(removeFromFavoritesWatcherSaga)
}
