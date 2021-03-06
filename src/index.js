import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';

import {PersistGate} from 'redux-persist/integration/react'

import {store,persistor} from './redux/store'

ReactDOM.render(
  // 103
  <Provider store={store}>   
  <BrowserRouter>
  <PersistGate persistor={persistor}>
  <App />
  </PersistGate>
    
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
