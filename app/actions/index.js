import navigationActions from './navigationState';
import pokemonListActions from './pokemonList';
import pokemonDetailActions from './pokemonDetail';

module.exports = {
  ...navigationActions,
  ...pokemonListActions,
  ...pokemonDetailActions
};
