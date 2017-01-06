import mockStore from 'redux-mock-store';
import pokemonDetailActions from '../pokemonDetail';
import { pokemonDetailData } from '../../utils';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

it('creates a REQUEST_POKEMON_DETAIL action', () => {
  expect(pokemonDetailActions.requestPokemonDetail())
    .toMatchSnapshot();
});

it('creates a RECEIVE_POKEMON_DETAIL action', () => {
  expect(pokemonDetailActions.receivePokemonDetail(pokemonDetailData))
    .toMatchSnapshot();
});

it('fetches pokemon detail', async () => {
  const response = JSON.stringify(pokemonDetailData);
  fetch.mockResponseSuccess(response);
  await store.dispatch(pokemonDetailActions.fetchPokemonDetail());
  expect(store.getActions()).toMatchSnapshot();
});
