import React, { Component, PropTypes } from 'react';
import Spinner from '../components/Spinner';
import { pokemonDetailData } from '../utils'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

async function getPokemonDetail(url) {
  try {
    // let response = await fetch(url);
    // let responseJson = await response.json();
    
    // Testing purposes
    let responseJson = pokemonDetailData;

    return responseJson;
  } catch(err) {
    console.error(err);
  }
}

class PokemonDetail extends Component {
  static propTypes = {
    pokemon: PropTypes.shape({
      url: PropTypes.string.isRequired
    })
  }

  constructor() {
    super();

    this.state = {
      pokemonDetail: null,
      isLoading: true
    };
  }

  componentDidMount() {
    const pokemon = this.props.pokemon;
    getPokemonDetail(pokemon.url)
      .then(pokemonDetail => {
        this.setState({
          pokemonDetail
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Spinner isLoading={this.state.isLoading} />
      );
    }

    const pokemonDetail = this.state.pokemonDetail;
    let types = pokemonDetail.types.map(obj => {
      return obj.type.name;
    }).join(', ');

    return (
      <View style={styles.container}>
        <Text>Name: {this.state.pokemonDetail.name}</Text>
        <Text>{types}</Text>
        <View style={styles.separator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },
  separator: {
    height: 3,
    backgroundColor: 'maroon'
  }
});

export default PokemonDetail;
