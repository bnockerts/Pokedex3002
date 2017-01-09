import React from 'react';
import renderer from 'react-test-renderer';
import PokemonDetail from '../PokemonDetail';
import { pokemonDetailData } from '../../utils';

it('renders a PokemonDetail', () => {
  const component = renderer.create(
    <PokemonDetail pokemon={pokemonDetailData} />
  );

  expect(component).toMatchSnapshot();
});
