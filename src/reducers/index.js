import { combineReducers } from 'redux';
import gameSearch from './gameSearchReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  gameSearch,
  routing: routerReducer
});

export default rootReducer;
