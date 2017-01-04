import navigationActions from './navigationState';
import pokemonActions from './pokemon';

module.exports = {
  ...navigationActions,
  ...pokemonActions
};
