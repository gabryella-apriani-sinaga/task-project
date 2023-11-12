// loginPortal Reducers
// --------------------------------------------------------

import {
  SET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_TOKEN,
} from "../actions/index";

const initialState = {
  isLoading: false,
  error: null,
  token: null,
};

export default function userReducer(state = initialState, { payload, type }) {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
}
