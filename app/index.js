import React from 'react';
import { Navigator, Text } from 'react-native';
import PokemonList from './routes/PokemonList';
import PokemonDetail from './routes/PokemonDetail';

function renderScene(route, navigator) {
  switch (route.id) {
    case 'list':
      return <PokemonList navigator={navigator} />;
    case 'detail':
      return <PokemonDetail navigator={navigator} pokemon={route.pokemon} />;
  }
}

const App = () => {
  return (
    <Navigator
      initialRoute={{ id: 'list', component: PokemonList }}
      renderScene={renderScene}
    />
  );
};

export default App;
