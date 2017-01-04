import React, { PropTypes } from 'react';
import {
  NavigationExperimental,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import PokemonListContainer from '../containers/PokemonListContainer';
import PokemonDetail from '../components/PokemonDetail';
import { navigatePop } from '../actions';

const {
	CardStack: NavigationCardStack,
	Card: NavigationCard,
	Header: NavigationHeader
} = NavigationExperimental


class AppContainer extends React.Component {
	render() {
		let { navigationState, backAction } = this.props

		return (
			<NavigationCardStack
				navigationState={navigationState}
				onNavigateBack={backAction}
				style={styles.container}
				direction={'vertical'}
				renderHeader={props => (
					<NavigationHeader
						{...props}
						onNavigateBack={backAction}
						renderTitleComponent={props => {
							const title = props.scene.route.title
							return <NavigationHeader.Title>{title}</NavigationHeader.Title>
						}}
					/>
				)}
				renderScene={this.renderScene}
			/>
		)
	}

	renderScene = ({scene}) => {
		const { route } = scene;

		switch(route.key) {
      case 'PokemonList':
        return <PokemonListContainer />
      case 'PokemonDetail':
        return <PokemonDetail pokemon={route.pokemon} />
    }
	}
}

AppContainer.propTypes = {
	navigationState: PropTypes.object,
	backAction: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

const mapStateToProps = (state) => {
  return {
    navigationState: state.navigationState
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
		backAction: () => {
			dispatch(navigatePop())
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
