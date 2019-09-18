import { fork } from 'redux-saga/effects'

import fetchDataSaga from './Sagas';
import addUserSaga from './addUserSaga';
import updateSaga from './updateSaga';
import deleteUserSaga from './DeleteUsersaga';

function* rootSaga () {
    yield [
        fork(fetchDataSaga),
        fork(addUserSaga),
        fork(updateSaga),
        fork(deleteUserSaga)
    ]
}

export default rootSaga;