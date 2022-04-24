
import { Provider } from 'react-redux';
import store from './store.js'

import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
import App from './App.jsx';
import Styles from './Styles/App.css'

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App className='App' />
  </Provider>
);

