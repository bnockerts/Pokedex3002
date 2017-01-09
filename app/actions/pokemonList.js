import { pokemonListData, formatPokemonList } from '../utils';
import {
  TOGGLE_CAUGHT,
  REQUEST_POKEMON_LIST,
  RECEIVE_POKEMON_LIST
} from '../constants/actionTypes';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=40';

function toggleCaught(id) {
  return {
    type: TOGGLE_CAUGHT,
    id
  };
}

function requestPokemonList() {
  return {
    type: REQUEST_POKEMON_LIST
  };
}

function receivePokemonList(json) {
  const pokemon = formatPokemonList(json.results);

  return {
    type: RECEIVE_POKEMON_LIST,
    pokemon
  };
}

function shouldFetchPokemon(state) {
  const { pokemon } = state.pokemonList;
  return !pokemon || pokemon.length === 0;
}

const fetchPokemon = () => async (dispatch) => {
  dispatch(requestPokemonList());
  let response = await fetch(API_URL);
  let json = await response.json();
  dispatch(receivePokemonList(json));
}

// When API is slow or doing development
// function fetchPokemon() {
//   return dispatch => {
//     dispatch(requestPokemonList());
//     return new Promise(resolve => setTimeout(function() {
//         resolve(pokemonListData);
//       }, 1000))
//       .then(json => dispatch(receivePokemonList(json)));
//   };
// }

function fetchPokemonIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPokemon(getState())) {
      return dispatch(fetchPokemon());
    }
  };
}

export default {
  toggleCaught,
  requestPokemonList,
  receivePokemonList,
  fetchPokemon,
  fetchPokemonIfNeeded,
  shouldFetchPokemon
};
