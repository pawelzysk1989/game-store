import { combineReducers } from 'redux';
import bookSearch from './bookSearchReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  bookSearch,
  routing: routerReducer
});

export default rootReducer;
