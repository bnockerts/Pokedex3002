import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import { fetchPokemonDetail } from '../actions'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class PokemonDetail extends Component {
  static propTypes = {
    pokemon: PropTypes.shape({
      url: PropTypes.string.isRequired
    })
  }

  componentDidMount() {
    const pokemon = this.props.pokemon;
    this.props.dispatch(fetchPokemonDetail(pokemon.url));
  }

  render() {
    const { isLoading, pokemon } = this.props;

    if (isLoading) {
      return (
        <Spinner isLoading={isLoading} />
      );
    }

    let types = pokemon.types.map(obj => {
      return obj.type.name;
    }).join(', ');

    return (
      <View style={styles.container}>
        <View style={styles.spriteContainer}>
          <Image
            style={styles.sprite}
            source={{uri: pokemon.sprites.front_default}}
          />
        </View>
        <Text>Name: {pokemon.name}</Text>
        <Text>{types}</Text>
        <View style={styles.separator}/>
        <View style={styles.stats}>
          {pokemon.stats.map(obj =>
            <View style={styles.statContainer} key={obj.stat.name}>
              <Text>{obj.stat.name}</Text>
              <Text>{obj.base_stat}</Text>
            </View>
          )}
        </View>
        <View style={styles.separator}/>
        <Text>Exp: {pokemon.base_experience}</Text>
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

function mapStateToProps(state) {
  const { pokemonDetail } = state;
  const { isLoading, pokemon } = pokemonDetail;

  return {
    isLoading,
    pokemon
  };
}

export default connect(mapStateToProps)(PokemonDetail);
