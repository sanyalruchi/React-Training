import { call, put, takeLatest } from "redux-saga/effects";
import { deleteUser } from "../Api";
import * as types from "../actions/actionTypes";

function* deleteUserS(action) {
  try {
    yield call(deleteUser, action.payload);
    yield put({
      type: types.DELETE_USER_DATA_SUCCESS
    });
  } catch (e) {
    yield put({
      type: types.DELETE_USER_DATA_FAILED
    });
  }
}

export default function* deleteUserSaga() {
  yield takeLatest(types.DELETE_USER_DATA, deleteUserS);
}
