import { REQUEST_POKEMON_DETAIL, RECEIVE_POKEMON_DETAIL } from '../constants/actionTypes';

export const initialState = {
  isLoading: true,
  pokemon: {}
};
export default pokemonDetail = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POKEMON_DETAIL:
      return Object.assign({}, state, {
        isLoading: true
      });

    case RECEIVE_POKEMON_DETAIL:
      return Object.assign({}, state, {
        isLoading: false,
        pokemon: action.pokemon
      });

    default:
      if (action.state && action.state.pokemon) {
        state.pokemon = action.state.pokemon;
      } else {
        state = initialState;
      }

      return state;
  }
}
