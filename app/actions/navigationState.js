import { PUSH_ROUTE, POP_ROUTE } from '../constants/actionTypes';

function navigatePush(state) {
  state = typeof state === 'string' ? { key: state, title: state } : state;
  return {
    type: PUSH_ROUTE,
    state
  };
}

function navigatePop() {
  return {
    type: POP_ROUTE,
  };
}

export default {
  navigatePush,
  navigatePop
};
