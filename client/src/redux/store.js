import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer as appReducer } from "./appReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";


const rootReducer = combineReducers({ appReducer, authReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));