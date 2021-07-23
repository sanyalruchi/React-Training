import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleWare from "redux-saga";
import reducer from "./reducers/index";

import rootSaga from "./saga/index";

const sagaMiddleWare = createSagaMiddleWare();
var middleWare = applyMiddleware(sagaMiddleWare);

var composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(reducer, {}, composeEnhancer(middleWare));

sagaMiddleWare.run(rootSaga);

export default store;
