import React from 'react';
import renderer from 'react-test-renderer';
import PokemonList from '../PokemonList';
import { formattedPokemonListData } from '../../utils';

it('renders a pokemonList', () => {
  const component = renderer.create(
    <PokemonList
      onRowPress={jest.fn}
      onValueChange={jest.fn}
      pokemon={formattedPokemonListData}
    />
  );

  expect(component).toMatchSnapshot();
});
