import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// const store = compose(applyMiddleware(thunk))(createStore)(reducer);

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducer);

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
