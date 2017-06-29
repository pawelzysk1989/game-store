import {ADD_BOOK, REMOVE_BOOK} from '../constants/actionTypes';
import initialState from './initialState';

export default function shoppingCartReducer(state = initialState.shoppingCart, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const book = action.payload;
      return [...state, book];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.payload);
    }
    default:
      return state;
  }
}


