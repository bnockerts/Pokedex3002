const initialState = {
  id: null,
  caught: false
};

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

const pokemon = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_CAUGHT':
      return state.map(obj => pokemonSingular(obj, action));

    default:
      return state;
  }
}

export default pokemon;
