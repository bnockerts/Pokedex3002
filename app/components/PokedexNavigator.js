import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';
import PokemonList from '../routes/PokemonList';
import PokemonDetail from '../routes/PokemonDetail';

class PokedexNavigator extends Component {
  renderScene = (route, navigator) => {
    switch (route.id) {
      case 'list':
        return <PokemonList navigator={navigator} />;
      case 'detail':
        return <PokemonDetail navigator={navigator} pokemon={route.pokemon} />;
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'list', component: PokemonList }}
        renderScene={this.renderScene}
      />
    )
  }
}

export default PokedexNavigator;
