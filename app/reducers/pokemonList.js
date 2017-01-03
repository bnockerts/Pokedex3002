const pokemonSingular = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_CAUGHT':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        caught: !state.caught
      });

    default:
      return state;
  }
}

const initialState = {
  isLoading: true,
  pokemon: []
};
const pokemonList = (state = initialState, action) => {
  console.log('**************************************');
  console.log(action.type);
  console.log('**************************************');
  switch (action.type) {
    case 'REQUEST_POKEMON_LIST':
      return Object.assign({}, state, {
        isLoading: true
      });

    case 'RECEIVE_POKEMON_LIST':
      return Object.assign({}, state, {
        isLoading: false,
        pokemon: action.pokemon
      });

    case 'TOGGLE_CAUGHT':
      const pokemon = state.pokemon.map(obj => pokemonSingular(obj, action));
      return Object.assign({}, state, {
        isLoading: false,
        pokemon: pokemon
      });

    default:
      return state;
  }
}

export default pokemonList;
