import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import history from './history';
import rootReducer from './modules/';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ history })),
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
