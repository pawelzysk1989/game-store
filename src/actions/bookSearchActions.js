import * as types from '../constants/actionTypes';
import axios from 'axios';

const GOOGLE_API_URL = 'https://www.googleapis.com/books/v1/volumes';
const MIN_PRICE = 1;
const MAX_PRICE = 100;

const randomPrice = () => {
  return Math.random() * (MAX_PRICE - MIN_PRICE) + MIN_PRICE;
};

const bookSearchSuccess = (data) => {
  return { type: types.BOOK_SEARCH_SUCCESS, payload: data};
};

export function bookSearch(searchOptions) {
  return function (dispatch) {
    return axios.get(`${GOOGLE_API_URL}?q=${searchOptions.name}`)
      .then(response => {
        const allBooks = response.data.items || [];
        const books = allBooks.reduce((memo, book) => {
          if(book.volumeInfo.imageLinks){
            memo.push({
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors || [],
              image: book.volumeInfo.imageLinks.thumbnail,
              price: randomPrice()
            });
          }
          return memo;
        }, []);

        dispatch(bookSearchSuccess(books));
      })
      .catch((error) => {
        throw(error);
      });
  };
}

