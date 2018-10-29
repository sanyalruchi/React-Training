import { call, put, takeLatest } from "redux-saga/effects";
import {updateData} from '../Api';
import * as types from '../actions/actionTypes';

function* updateUser(action) {
    console.log(action.payload, "action in saga");
    try {
        const updatedData = yield call(updateData, action.payload);
        yield put({
            type: types.UPDATE_USER_DATA_SUCCESS             
        })
    } catch (e) {
        console.log(e);
        yield put({
            type: types.UPDATE_USER_DATA_FAILED
          });
    }
}

export default function* updateSaga() {
    console.log("in updateSaga");
    yield takeLatest(types.UPDATE_USER_DATA, updateUser);
}