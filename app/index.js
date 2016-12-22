import React from 'react';
import { Provider } from 'react-redux';
import PokedexNavigator from './components/PokedexNavigator';

const App = () => {
  return (
    <Provider>
      <PokedexNavigator />
    </Provider>
  );
};

export default App;
