// src/store/store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import pokemonReducer from "./reducers/index";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
