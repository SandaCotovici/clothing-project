import { all, call } from 'redux-saga/effects'
import { cartSagas } from './cart/sagas'
import { shopSaga } from './shop/sagas'
import { userSagas } from './user/sagas'

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSagas), call(cartSagas)])
}
