import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import PokemonList from '../components/PokemonList';
import { navigatePush, fetchPokemonIfNeeded, toggleCaught } from '../actions';
import {
  ListView
} from 'react-native';

class PokemonListContainer extends Component {
	  componentDidMount() {
			this.props.loadData();
		}

		render() {
			if (this.props.isLoading) {
				return (
					<Spinner isLoading={this.props.isLoading} />
				);
			}

			return (
				<PokemonList {...this.props} />
			)
  }
}

const mapStateToProps = (state) => {
	const { pokemonList } = state;
  const { isLoading, pokemon } = pokemonList;

  return {
    isLoading,
    pokemon
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadData: () => {
			dispatch(fetchPokemonIfNeeded());
		},

		onValueChange: (id) => {
			dispatch(toggleCaught(id));
		},

		onRowPress: (pokemon) => {
			dispatch(navigatePush({
				key: 'PokemonDetail',
				title: pokemon.name,
				pokemon
			}));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListContainer);
