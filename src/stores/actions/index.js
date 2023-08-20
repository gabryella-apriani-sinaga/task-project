import { servicePokemon } from "../../utils/api/pokemonService";

export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

export const fetchPokemonRequest = () => ({
  type: FETCH_POKEMON_REQUEST,
});

export const fetchPokemonSuccess = (data) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: data,
});

export const fetchPokemonFailure = (error) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: error,
});

export const fetchPokemon = () => {
  return async (dispatch) => {
    dispatch(fetchPokemonRequest());

    try {
      const response = await servicePokemon(); //
      const pokemonList = response.data.results;
      dispatch(fetchPokemonSuccess(pokemonList));
    } catch (error) {
      dispatch(fetchPokemonFailure(error.message));
    }
  };
};
