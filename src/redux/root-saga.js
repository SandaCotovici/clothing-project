import { all, call } from 'redux-saga/effects'
import { fetchCollectionsStartSaga } from './shop/sagas'
import { userSagas } from './user/sagas'

export default function* rootSaga() {
  yield all([call(fetchCollectionsStartSaga), call(userSagas)])
}
