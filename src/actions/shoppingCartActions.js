import * as types from '../constants/actionTypes';

export function addBook(book) {
  return { type: types.ADD_BOOK, payload: book};
};

