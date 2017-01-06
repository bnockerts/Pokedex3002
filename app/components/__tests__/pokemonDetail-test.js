import React from 'react';
import renderer from 'react-test-renderer';
import pokemonDetail from '../pokemonDetail';
import { pokemonDetailData } from '../../utils';

it('renders a PokemonDetail', () => {
  const component = renderer.create(
    <pokemonDetail pokemon={pokemonDetailData} />
  );

  expect(component).toMatchSnapshot();
});
