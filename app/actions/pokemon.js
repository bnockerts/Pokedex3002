import { pokemonListData, pokemonDetailData } from '../utils';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toggleCaught(id) {
  return {
    type: 'TOGGLE_CAUGHT',
    id
  };
}

async function loadPokemon() {
  // let response = await fetch(API_URL);
  // let responseJson = await response.json();

  // Testing purposes
  let responseJson = pokemonListData;

  const indicator = 'pokemon/';
  const pokemonList = responseJson.results.map(pokemon => {
    pokemon.id = pokemon.url.substring(pokemon.url.indexOf(indicator) + indicator.length, pokemon.url.lastIndexOf('/'));
    pokemon.name = capitalizeFirstLetter(pokemon.name);
    return pokemon;
  });

  return {
    type: 'LOADED_POKEMON_LIST',
    pokemonList
  };
}

async function loadPokemonDetail(url) {
  // let response = await fetch(url);
  // let pokemonDetail = await response.json();
  
  // Testing purposes
  let pokemonDetail = pokemonDetailData;

  return {
    type: 'LOADED_POKEMON_DETAIL',
    pokemonDetail
  };
}

export {
  toggleCaught,
  loadPokemon,
  loadPokemonDetail
};
