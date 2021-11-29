import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './Store/Reducer/';

const stores = createStore(allReducers)


ReactDOM.render(
  
    <Provider store={stores}>
      <App />
    </Provider>,
  document.getElementById('root')
);

