import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

async function getPokemonDetail(url) {
  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    // let result = [ { url: 'https://pokeapi.co/api/v2/pokemon/1/',
	  //   name: 'bulbasaur' },
	  // { url: 'https://pokeapi.co/api/v2/pokemon/2/', name: 'ivysaur' },
	  // { url: 'https://pokeapi.co/api/v2/pokemon/3/',
	  //   name: 'venusaur' },
	  // { url: 'https://pokeapi.co/api/v2/pokemon/4/',
	  //   name: 'charmander' }, ];

    return responseJson;
    // return result;
  } catch(err) {
    console.error(err);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class PokemonDetail extends Component {
  componentDidMount() {
    const pokemon = this.props.pokemon;
    getPokemonDetail(pokemon.url).then(pokemonDetail => {
        console.log(pokemonDetail);
    });
  }

  render() {
    return (
      <Text>HI</Text>
    )
  }
}

const styles = StyleSheet.create({
    
});

export default PokemonDetail;
