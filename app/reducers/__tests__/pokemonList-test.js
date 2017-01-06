import { pokemonListData, formattedPokemonListData } from '../../utils';
import pokemonList from '../pokemonList';
import { initialState } from '../pokemonList';
import pokemonListActions from '../../actions/pokemonList';

it('handles unhandled action', () => {
  expect(pokemonList(initialState, { type: '_NULL' }))
    .toMatchSnapshot();
});

it('handles TOGGLE_CAUGHT action', () => {
  const testState = {
    isLoading: false,
    pokemon: formattedPokemonListData
  };

  let expectedState = JSON.parse(JSON.stringify(testState));
  const randomPokemonIndex = Math.floor(Math.random() * expectedState.pokemon.length);
  const testPokemonId = expectedState.pokemon[randomPokemonIndex].id;
  expectedState.pokemon[randomPokemonIndex].caught = true;

  expect(pokemonList(testState, pokemonListActions.toggleCaught(testPokemonId)))
    .toEqual(expectedState);
});

it('handles REQUEST_POKEMON_LIST action', () => {
  expect(pokemonList(initialState, pokemonListActions.requestPokemonList()))
    .toMatchSnapshot();
});

it('handles RECEIVE_POKEMON_LIST action', () => {
  expect(pokemonList(initialState, pokemonListActions.receivePokemonList(pokemonListData)))
    .toEqual({
      isLoading: false,
      pokemon: formattedPokemonListData
    });
});
