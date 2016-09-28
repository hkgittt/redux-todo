import { createStore } from 'redux';
import todoApp from './reducers';

const logger = (store) => {
  const nextDispatch = store.dispatch;
  if (!console.group) {
    return nextDispatch;
  }
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState().toString());
    console.log('%c action', 'color: blue', action);
    const returnValue = nextDispatch(action);
    console.log('%c next state', 'color: green', store.getState().toString());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const promise = (store) => {
  const nextDispatch = store.dispatch;
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(nextDispatch);
    }
    return nextDispatch(action);
  };
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.forEach(middleware =>
    (store.dispatch = middleware(store))
  );
};

const configureStore = () => {
  const store = createStore(
    todoApp
  );
  const middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  middlewares.push(promise);

  wrapDispatchWithMiddlewares(store, middlewares);
  return store;
};

export default configureStore;
