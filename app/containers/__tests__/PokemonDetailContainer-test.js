import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-addons-test-utils';
import { PokemonDetailContainer } from '../PokemonDetailContainer';
import { pokemonDetailData } from '../../utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders a PokemonDetailContainer', () => {
  const testProps = {
    pokemon: pokemonDetailData
  };

  const component = shallowRenderer.render(
    <PokemonDetailContainer {...testProps} />
  );

  expect(component).toMatchSnapshot();
});
