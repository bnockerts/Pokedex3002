import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-addons-test-utils';
import { PokemonListContainer } from '../PokemonListContainer';
import { formattedPokemonListData } from '../../utils';

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders a PokemonListContainer', () => {
  const testProps = {
    onRowPress: jest.fn,
    onValueChange: jest.fn,
    pokemon: formattedPokemonListData
  };

  const component = shallowRenderer.render(
    <PokemonListContainer {...testProps} />
  );

  expect(component).toMatchSnapshot();
});
