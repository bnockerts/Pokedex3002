import { combineReducers } from 'redux';
import navigationState from './navigationState';
import pokemonList from './pokemonList';
import pokemonDetail from './pokemonDetail';

export default combineReducers({
  navigationState,
  pokemonList,
  pokemonDetail
});
