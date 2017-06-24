import {GAME_SEARCH_SUCCESS} from '../constants/actionTypes';

import initialState from './initialState';

export default function gameSearchReducer(state = initialState.gameSearch, action) {

  switch (action.type) {
    case GAME_SEARCH_SUCCESS:
      return {...state};

    default:
      return state;
  }
}
