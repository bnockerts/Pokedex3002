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

const fetchPokemonDetail = (url) => async (dispatch) => {
    dispatch(requestPokemonDetail());
    let response = await fetch(url);
    let json = await response.json();
    dispatch(receivePokemonDetail(json));
}

// When API is slow or doing development
// function fetchPokemonDetail() {
//   return dispatch => {
//     dispatch(requestPokemonDetail());
//     return new Promise(resolve => setTimeout(function() {
//         resolve(pokemonDetailData);
//       }, 1000))
//       .then(json => dispatch(receivePokemonDetail(json)));
//   };
// }

export default {
  requestPokemonDetail,
  receivePokemonDetail,
  fetchPokemonDetail
};
