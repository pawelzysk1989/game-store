import React from 'react';
import PropTypes from 'prop-types';

const BookSerachResultItem = ({book, currency, priceOnSlider}) => {
  return (
    <div className="book">
      <div className="card">
        <div className="card-image">
          <img src={book.image}/>
          <span className="card-title"></span>
          <a className={`btn-floating halfway-fab waves-effect waves-light red ${priceOnSlider > book.price ? "" : "disabled"}`}>
          <i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
          <p><strong>Price: </strong>{`${book.price.toFixed(2)} ${currency}`}</p>
        </div>
      </div>
    </div>
  );
}

BookSerachResultItem.PropTypes = {
  book: PropTypes.object.isRequired,
  priceOnSlider: PropTypes.number.isRequired,
  currency: PropTypes.string,
};

BookSerachResultItem.defaultProps = {
  currency: "$"
};

export default BookSerachResultItem;


// <p><strong>Title: </strong>{book.title}</p>
// {book.authors.length > 0 && <p><strong>Authors: </strong>{book.authors.join(", ")}</p>}