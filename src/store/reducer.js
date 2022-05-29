import {combineReducers} from "redux-immutable";

import {reducer as recommendReducer} from "./recommend";
import {reducer as playerReducer} from "./player";

const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
})

export {
  reducer
}
