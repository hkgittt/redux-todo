import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

const store = createStore(todoApp);

store.subscribe(() => console.log('mm', store.getState()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
