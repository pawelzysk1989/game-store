import {BOOK_SEARCH_SUCCESS} from '../constants/actionTypes';
import initialState from './initialState';

const setCostRange = (books) => {
  if (books.length < 1) {
    return {min: 0, max: 0, val: 0};
  }
  let min =  books[0].price;
  let max = min;
  for (let i = 1; i < books.length; i++) {
    const price = books[i].price;
    min = price < min ? price : min;
    max = price > max ? price : max;
  }
  [min, max] = [Math.floor(min), Math.ceil(max)];
  return {min, max, val: min};
};

export default function bookSearchReducer(state = initialState.bookSearch, action) {
  switch (action.type) {
    case BOOK_SEARCH_SUCCESS: {
      const books = action.payload;
      return {...state, list: books, costRange: setCostRange(books) };
    }
    default:
      return state;
  }
}


