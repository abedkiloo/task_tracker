import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux"
import App from './Containers/App';
import { combineReducers, createStore,  applyMiddleware  } from "redux"

// import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk'

import store from "./Store/configureStore"


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
