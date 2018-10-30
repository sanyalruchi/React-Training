import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "./../Api";
import * as types from "./../actions/actionTypes";

function* getUserData() {
  try {
    const userData = yield call(fetchData);
    yield put({
      type: types.REQUEST_USER_DATA_SUCCESS,
      payload: userData
    });
  } catch (e) {
    yield put({
      type: types.REQUEST_USER_DATA_FAILED
    });
  }
}

export default function* rootSaga() {
  yield takeLatest(types.REQUEST_USER_DATA, getUserData);
}
