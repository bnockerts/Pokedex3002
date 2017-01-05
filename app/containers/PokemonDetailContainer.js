import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import PokemonDetail from '../components/PokemonDetail';
import { navigatePush, fetchPokemonDetail } from '../actions';

class PokemonListContainer extends Component {
	  componentDidMount() {
      const { url } = this.props.pokemon;      
			this.props.loadData(url);
		}

		render() {
			if (this.props.isLoading) {
				return (
					<Spinner isLoading={this.props.isLoading} />
				);
			}

			return (
				<PokemonDetail {...this.props} />
			)
  }
}

function mapStateToProps(state) {
  const { pokemonDetail } = state;
  const { isLoading, pokemon } = pokemonDetail;

  return {
    isLoading,
    pokemon
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadData: (url) => {
			dispatch(fetchPokemonDetail(url));
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
