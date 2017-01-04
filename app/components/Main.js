import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import PokemonList from '../components/PokemonList';
import { fetchPokemonIfNeeded } from '../actions';

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPokemonIfNeeded());
  }

  render() {
    const { pokemon, isLoading } = this.props;
    if (isLoading) {
      return (
        <Spinner isLoading={isLoading} />
      );
    }

    return (
      <PokemonList pokemon={pokemon} />
    );
  }
}

function mapStateToProps(state) {
  const { pokemonList } = state;
  const { isLoading, pokemon } = pokemonList;

  return {
    isLoading,
    pokemon
  };
}

export default connect(mapStateToProps)(Main);
