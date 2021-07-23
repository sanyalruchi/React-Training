import { call, put, takeLatest } from "redux-saga/effects";
import { updateData,getUserData } from "../Api";
import * as types from "../actions/actionTypes";

function* updateUser(action) {
  try {
    yield call(updateData, action.payload);
    yield put({
      type: types.UPDATE_USER_DATA_SUCCESS
    });
  } catch (e) {
    yield put({
      type: types.UPDATE_USER_DATA_FAILED
    });
  }
}

function* getDataSaga(){
  try{
    yield call(getUserData);
    yield put({
      type: types.GET_USER_DATA_SUCCESS
    });
  } catch(e){
    yield put({
      type: types.GET_USER_DATA_FAILED
    })
  }
}

export default function* updateSaga() {
  yield takeLatest(types.UPDATE_USER_DATA, updateUser);
}

export function* getUserDataSaga(action) {
  console.log("inside get user data saga");
  yield takeLatest(types.GET_USER_DATA, getDataSaga);
}
