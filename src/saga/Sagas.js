import { call, put, takeLatest } from "redux-saga/effects";
import {fetchData} from "./../Api";
import * as types from "./../actions/actionTypes";

function* getUserData() {
  console.log("inside getuserdata");
  try {
    const userData = yield call(fetchData);
    yield put({
      type: types.REQUEST_USER_DATA_SUCCESS,
      payload: userData
    });
  } catch (e) {
    console.log(e, "error");
    yield put({
      type: types.REQUEST_USER_DATA_FAILED
    });
  }
}

export default function* rootSaga() {
  console.log("in rootsaga");
  yield takeLatest(types.REQUEST_USER_DATA, getUserData);
}
