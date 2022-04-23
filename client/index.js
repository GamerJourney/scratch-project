
import { Provider } from 'react-redux';
import store from './store.js'

import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
import App from './App.jsx';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

const root = createRoot(container);
root.render(
<Provider store={store}>
  <App />
</Provider>
);

