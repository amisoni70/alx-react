import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer';
import App from "./App/App";
import thunk from 'redux-thunk';
import { Map } from 'immutable';
import { composeWihDevTools } from 'redux-devtools-extension';

const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWihDevTools;
const store = createStore(uiReducer, Map(initialState), reduxExtension(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);