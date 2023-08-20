import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
} from "../actions/index";

const initialState = {
  loading: false,
  pokemonData: [],
  error: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_POKEMON_SUCCESS:
      return { ...state, loading: false, pokemonData: action.payload };

    case FETCH_POKEMON_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default pokemonReducer;
