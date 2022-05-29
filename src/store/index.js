import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'

import {reducer} from "./reducer";

// 开启redux-tool调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export  {
  store
}
