import * as types from '../constants/actionTypes';
import {APIKEY} from '../../config';
import {fakeCall} from '../utils/fakerApi';

function bookSearchSuccess(data) {
  return { type: types.BOOK_SEARCH_SUCCESS, payload: data};
}

export function bookSearch(searchOptions) {
  return function (dispatch) {
    return fakeCall(searchOptions.name) 
      .then(response => {
        dispatch(bookSearchSuccess(response));
      })
      .catch(error => {
        throw(error);
      });
  };
}

