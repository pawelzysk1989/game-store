import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ShoppingCart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(id) {
    this.props.removeBook(id);
  }

  render() {
    return (
      <ul className="collection">
        <ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {this.props.shoppingCart.map((book) => {
            return (
              <ShoppingCartItem key={book.id} book={book} removeItem={this.removeItem}/>
            );
          })}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
} 

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired
};

export default ShoppingCart;