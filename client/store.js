import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//ADDED .JS to line below
import reducers from './Reducers/index.js';

const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;