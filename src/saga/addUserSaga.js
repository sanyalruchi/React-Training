import { call, put, takeLatest } from "redux-saga/effects";
import { addUserData } from "../Api";
import * as types from "../actions/actionTypes";

function* addUser(action) {
  try {
    const response = yield call(addUserData, action.payload);
    yield put({
      type: types.ADD_USER_DATA_SUCCESS
    });
  } catch (e) {
    yield put({
      type: types.ADD_USER_DATA_FAILED
    });
  }
}

export default function* addUserSaga() {
  yield takeLatest(types.ADD_USER_DATA, addUser);
}
