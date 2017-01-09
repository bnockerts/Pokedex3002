import navigationState from '../navigationState';
import { initialState } from '../navigationState';
import navigationStateActions from '../../actions/navigationState';

it('handles unhandled action', () => {
  expect(navigationState(initialState, { type: '_NULL' }))
    .toMatchSnapshot();
});

it('handles PUSH_ROUTE action', () => {
  const testRouteName = 'testRoute';
  let expectedState = JSON.parse(JSON.stringify(initialState));
  expectedState.index = initialState.index + 1;
  expectedState.routes.push({ key: testRouteName, title: testRouteName });

  expect(navigationState(initialState, navigationStateActions.navigatePush(testRouteName)))
    .toEqual(expectedState);
});

it('handles POP_ROUTE action, pop on index 0', () => {
  expect(navigationState(initialState, navigationStateActions.navigatePop()))
    .toMatchSnapshot();
});

it('handles POP_ROUTE action, pop on index > 0', () => {
  const testRouteName = 'testRoute';
  const pushedState = navigationState(initialState, navigationStateActions.navigatePush(testRouteName));

  expect(navigationState(pushedState, navigationStateActions.navigatePop()))
    .toMatchSnapshot();
});
