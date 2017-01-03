import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';
import Main from '../routes/Main';
import PokemonDetail from '../routes/PokemonDetail';

class PokedexNavigator extends Component {
  renderScene = (route, navigator) => {
    switch (route.id) {
      case 'main':
        return <Main navigator={navigator} />;
      case 'detail':
        return <PokemonDetail navigator={navigator} pokemon={route.pokemon} />;
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'main', component: Main }}
        renderScene={this.renderScene}
      />
    )
  }
}

export default PokedexNavigator;
