import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import commentReducer from './reducers/commentReducer';
import textAreaStateReducer from './reducers/TextAreaStateReducer';
import { loadFromStore, writeToStore } from './scripts/localStore';

const rootReducer = combineReducers({comments: commentReducer, textAreaState: textAreaStateReducer})

const prevState = loadFromStore();
let store = null;
if (prevState) {
  store = createStore(rootReducer, prevState);
} else {
  store = createStore(rootReducer);
}

store.subscribe(() => {
  writeToStore(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
