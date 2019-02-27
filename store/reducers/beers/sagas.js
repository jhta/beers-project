import { put, takeEvery, all, call, fork } from 'redux-saga/effects'
import { actions } from 'reducers/beers/actions'
import { getRandomBeersBypage } from 'services/beer'

export function* requestListWatcherSaga() {
  yield takeEvery(actions.requestBeers.TRIGGER, requestList)
}

export function* requestList(something) {
  console.log('saga', something)
  try {
    yield put(actions.requestBeers.request())
    const { data } = yield call(getRandomBeersBypage)

    yield put(actions.requestBeers.success(data))
  } catch (error) {
    yield put(actions.requestBeers.failure(error.message))
  }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield fork(requestListWatcherSaga)
}
