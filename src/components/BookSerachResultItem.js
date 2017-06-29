import React from 'react';
import PropTypes from 'prop-types';

const BookSerachResultItem = ({book, currency, priceOnSlider, addBook, index}) => {
  return (
    <div className="book">
      <div className="card">
        <div className="card-image">
          <img src={book.image}/>
          <span className="card-title"/>
          <a onClick={() => addBook(index)} className={`btn-floating halfway-fab waves-effect waves-light red ${priceOnSlider > book.price ? "" : "disabled"}`}>
          <i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
          <p><strong>Price: </strong>{`${book.price} ${currency}`}</p>
        </div>
      </div>
    </div>
  );
};

BookSerachResultItem.propTypes = {
  book: PropTypes.object.isRequired,
  priceOnSlider: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  addBook: PropTypes.func.isRequired,
  currency: PropTypes.string,
};

BookSerachResultItem.defaultProps = {
  currency: "$"
};

export default BookSerachResultItem;
