import mockStore from 'redux-mock-store';
import pokemonListActions from '../pokemonList';
import { pokemonListData } from '../../utils';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

it('creates a TOGGLE_CAUGHT action', () => {
  const testId = 1;
  expect(pokemonListActions.toggleCaught(testId))
    .toMatchSnapshot();
});

it('creates a REQUEST_POKEMON_LIST action', () => {
  expect(pokemonListActions.requestPokemonList(pokemonListData))
    .toMatchSnapshot();
});

it('creates a RECEIVE_POKEMON_LIST action', () => {
  expect(pokemonListActions.receivePokemonList(pokemonListData))
    .toMatchSnapshot();
});

it('should allow fetching of pokemon list', () => {
  const testState = {
    pokemonList: {
      pokemon: []
    }
  };

  expect(pokemonListActions.shouldFetchPokemon(testState))
    .toBeTruthy();
});

it('should not allow fetching of pokemon list', () => {
  const testState = {
    pokemonList: {
      pokemon: pokemonListData
    }
  };

  expect(pokemonListActions.shouldFetchPokemon(testState))
    .toBeFalsy();
});

it('fetches pokemon list', async () => {
  const response = JSON.stringify(pokemonListData);
  fetch.mockResponseSuccess(response);
  await store.dispatch(pokemonListActions.fetchPokemon());
  expect(store.getActions()).toMatchSnapshot();
});
