import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../Spinner';

it('renders a Spinner', () => {
  const component = renderer.create(
    <Spinner isLoading={true} />
  );

  expect(component).toMatchSnapshot();
});
