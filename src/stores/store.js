// src/store/store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "./reducers/index";

const rootReducer = combineReducers({
  pokemon: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
