import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import todoApp from './reducers';

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    todoApp,
    persistedState
  );

  store.subscribe(() => saveState({
    todos: store.getState().get('todos'),
  }));

  return store;
};

export default configureStore;
