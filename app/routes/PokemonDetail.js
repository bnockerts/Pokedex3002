import React, { Component, PropTypes } from 'react';
import Spinner from '../components/Spinner';
import { pokemonDetailData } from '../utils'
import {
  AppRegistry,
  Image,
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

    let stats = pokemonDetail.stats.map(obj => {
      return (
        <View style={styles.statContainer} key={obj.stat.name}>
          <Text>{obj.stat.name}</Text>
          <Text>{obj.base_stat}</Text>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.spriteContainer}>
          <Image
            style={styles.sprite}
            source={{uri: pokemonDetail.sprites.front_default}}
          />
        </View>
        <Text>Name: {pokemonDetail.name}</Text>
        <Text>{types}</Text>
        <View style={styles.separator}/>
        <View style={styles.stats}>{stats}</View>
        <View style={styles.separator}/>
        <Text>Exp: {pokemonDetail.base_experience}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 80
  },
  sprite: {
    width: 50,
    height: 50
  },
  spriteContainer: {
    alignItems: 'center'
  },
  statContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  separator: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    height: 3,
    backgroundColor: 'maroon'
  },
  stats: {
    flexDirection: 'row'
  }
});

export default PokemonDetail;
