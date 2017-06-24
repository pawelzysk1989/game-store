import * as types from '../constants/actionTypes';

function gameSearchSuccess(data) {
  return { type: types.GAME_SEARCH_SUCCESS, payload: data};
}

// example of a thunk using the redux-thunk middleware
export function gameSearch() {
  return gameSearchSuccess("kutas");
}

