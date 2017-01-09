import navigationStateActions from '../navigationState';

it('creates a PUSH_ROUTE action, string', () => {
  const testRouteName = 'testRoute';

  expect(navigationStateActions.navigatePush(testRouteName))
    .toMatchSnapshot();
});

it('creates a PUSH_ROUTE action, object', () => {
  const testRoute = {
    key: 'testRoute',
    title: 'testTitle',
    other: 'data'
  };

  expect(navigationStateActions.navigatePush(testRoute))
    .toMatchSnapshot();
});

it('creates a POP_ROUTE action', () => {
  expect(navigationStateActions.navigatePop())
    .toMatchSnapshot();
});
