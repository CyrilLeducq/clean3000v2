import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './features/clients/clientsSlice';
import passageReducer from './features/passages/passagesSlice';
import App from './App';

const store = configureStore({
  reducer: {
    clients: clientReducer,
    passages: passageReducer,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);