import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleWare from "redux-saga";
import reducer from "./reducers/index";
import rootSaga from "./saga/Sagas";
import addUserSaga from "./saga/addUserSaga";
import updateSaga from "./saga/updateSaga";
import deleteUserSaga from "./saga/DeleteUsersaga";

const sagaMiddleWare = createSagaMiddleWare();
var middleWare = applyMiddleware(sagaMiddleWare);

var composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(reducer, {}, composeEnhancer(middleWare));

sagaMiddleWare.run(rootSaga);
sagaMiddleWare.run(addUserSaga);
sagaMiddleWare.run(updateSaga);
sagaMiddleWare.run(deleteUserSaga);

export default store;
