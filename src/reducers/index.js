import { combineReducers } from 'redux';
import bookSearch from './bookSearchReducer';
import shoppingCart from './shoppingCartReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  bookSearch,
  shoppingCart,
  routing: routerReducer
});

export default rootReducer;
