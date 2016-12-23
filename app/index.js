import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PokedexNavigator from './components/PokedexNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <PokedexNavigator />
    </Provider>
  );
};

export default App;
