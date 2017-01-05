import { PUSH_ROUTE, POP_ROUTE } from '../constants/actionTypes';
import * as NavigationStateUtils from 'NavigationStateUtils'

export const initialState = {
  index: 0,
  routes: [
    {
      key: 'PokemonList',
      title: 'List of Pokemon'
    }
  ]
};

export default navigationState = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_ROUTE:
      if (state.routes[state.index].key === (action.state && action.state.key)) {
        return state;
      }
		  return NavigationStateUtils.push(state, action.state);

    case POP_ROUTE:
      if (state.index === 0 || state.routes.length === 1) {
        return state;
      }
		  return NavigationStateUtils.pop(state);

    default:
      return state;
  }
};
