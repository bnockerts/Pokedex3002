import React from 'react';
import renderer from 'react-test-renderer';
import pokemonList from '../pokemonList';
import { formattedPokemonListData } from '../../utils';

it('renders a pokemonList', () => {
  const component = renderer.create(
    <pokemonList
      onRowPress={jest.fn}
      onValueChange={jest.fn}
      pokemon={formattedPokemonListData}
    />
  );

  expect(component).toMatchSnapshot();
});
