import React, { Component, PropTypes } from 'react';
import Spinner from '../components/Spinner';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';

async function getPokemonDetail(url) {
  try {
    let response = await fetch(url);
    let responseJson = await response.json();

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

    return (
      <Text>Name:</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  float: {
    position: 'absolute',
    margin: null,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default PokemonDetail;
