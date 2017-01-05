import { pokemonDetailData } from '../utils';
import {
  REQUEST_POKEMON_DETAIL,
  RECEIVE_POKEMON_DETAIL
} from '../constants/actionTypes';

function requestPokemonDetail() {
  return {
    type: REQUEST_POKEMON_DETAIL
  };
}

function receivePokemonDetail(pokemon) {
  return {
    type: RECEIVE_POKEMON_DETAIL,
    pokemon
  };
}

function fetchPokemonDetail(url) {
  return dispatch => {
    dispatch(requestPokemonDetail());
    // return fetch(url)
    //   .then(response => response.json())
    //   .then(json => dispatch(receivePokemonList(json)));

    return new Promise(resolve => setTimeout(function() {
        resolve(pokemonDetailData);
      }, 1000))
      .then(json => dispatch(receivePokemonDetail(json)));
  };
}

export default {
  requestPokemonDetail,
  receivePokemonDetail,
  fetchPokemonDetail
};
