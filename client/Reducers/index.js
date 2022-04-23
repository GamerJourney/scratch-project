/* a place to combine reducers */

import { combineReducers } from 'redux';

// import all reducers here

import gameReducer from './gameReducer.js';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  game: gameReducer,
});

// make the combined reducers available for import
export default reducers;
