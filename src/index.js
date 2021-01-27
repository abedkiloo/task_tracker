import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux"
import App from './Containers/App';
import { combineReducers, createStore,  applyMiddleware  } from "redux"

// import App from './App';
import store from "./Store/configureStore"


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);