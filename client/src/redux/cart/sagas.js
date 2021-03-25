import { takeLatest, all, call, put } from 'redux-saga/effects'
import UserActionTypes from '../user/types'
import { clearCart } from './actions'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}