import {call, put, takeLatest} from 'redux-saga/effects';
import {addUserData} from '../Api';
import * as types from '../actions/actionTypes';

function* addUser(action) {
    console.log("inside add user saga");
    try {
        const response = yield call(addUserData, action.payload)
        yield put({
            type: types.ADD_USER_DATA_SUCCESS
        })
    } catch(e) {
        console.log(e, "error");
        yield put({
            type: types.ADD_USER_DATA_FAILED
          });
    }
}

export default function* addUserSaga() {
    console.log("inside add");
    yield takeLatest(types.ADD_USER_DATA, addUser);
}