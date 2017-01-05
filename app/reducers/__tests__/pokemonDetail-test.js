import { pokemonDetailData } from '../../utils';
import pokemonDetail from '../pokemonDetail';
import { initialState } from '../pokemonDetail';
import pokemonDetailActions from '../../actions/pokemonDetail';

it('handles unhandled action', () => {
  expect(pokemonDetail(initialState, { type: '_NULL' }))
    .toMatchSnapshot();
});

it('handles REQUEST_POKEMON_DETAIL action', () => {
  expect(pokemonDetail(initialState, pokemonDetailActions.requestPokemonDetail()))
    .toMatchSnapshot();
});

it('handles RECEIVE_POKEMON_DETAIL action', () => {
  expect(pokemonDetail(initialState, pokemonDetailActions.receivePokemonDetail(pokemonDetailData)))
    .toEqual({
      isLoading: false,
      pokemon: pokemonDetailData
    });
});
