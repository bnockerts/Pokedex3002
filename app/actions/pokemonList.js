import { pokemonListData, pokemonDetailData } from '../utils';
import {
  TOGGLE_CAUGHT,
  REQUEST_POKEMON_LIST,
  RECEIVE_POKEMON_LIST
} from '../constants/actionTypes';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
  const indicator = 'pokemon/';
  const pokemon = json.results.map(obj => {
    obj.id = obj.url.substring(obj.url.indexOf(indicator) + indicator.length, obj.url.lastIndexOf('/'));
    obj.name = capitalizeFirstLetter(obj.name);
    return obj;
  });

  return {
    type: RECEIVE_POKEMON_LIST,
    pokemon
  };
}

function shouldFetchPokemon(state) {
  const { pokemon } = state.pokemonList;
  return !pokemon || pokemon.length === 0;
}

function fetchPokemon() {
  return dispatch => {
    dispatch(requestPokemonList());
    // return fetch(API_URL)
    //   .then(response => response.json())
    //   .then(json => dispatch(receivePokemonList(json)));

    return new Promise(resolve => setTimeout(function() {
        resolve(pokemonListData);
      }, 1000))
      .then(json => dispatch(receivePokemonList(json)));
  };
}

function fetchPokemonIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPokemon(getState())) {
      return dispatch(fetchPokemon());
    }
  };
}

export default {
  toggleCaught,
  fetchPokemonIfNeeded
};
