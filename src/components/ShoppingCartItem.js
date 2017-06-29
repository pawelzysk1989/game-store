import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCartItem = ({book, removeItem}) => {
  return (
    <li className="collection-item avatar">
      <img src={book.image} alt="" className="circle"/>
      <span className="title"><strong>Title: </strong>{book.title}</span>
      <p><strong>Authors: </strong>{book.authors}<br/>
        <strong>Price: </strong>{book.price}
      </p>
      <a href="#!" onClick={() => removeItem(book.id)} className="secondary-content"><i className="material-icons">delete</i></a>
    </li>
  );
};

ShoppingCartItem.propTypes = {
  book: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default ShoppingCartItem;