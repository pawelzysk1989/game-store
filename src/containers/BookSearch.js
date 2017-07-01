import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../actions/bookSearchActions';
import * as shoppingActions from '../actions/shoppingCartActions';
import BookSearchForm from '../components/BookSearchForm';
import BookSearchResult from '../components/BookSearchResult';
import ShoppingCart from '../components/ShoppingCart';

const displayNumberOfItems = (cart) => {
  return (
    cart.length > 0 && <span className="new badge" data-badge-caption="item(s)">{cart.length}</span>
  );
};

export const BookSearch = (props) => {
  return (
    <ul className="collapsible" data-collapsible="expandable">
      <li>
        <div className="collapsible-header"><i className="material-icons">shopping_cart</i>Your Basket{displayNumberOfItems(props.shoppingCart)}</div>
        <div className="collapsible-body">
        { 
          props.shoppingCart.length > 0 ?
          <div>
            <ShoppingCart
              shoppingCart={props.shoppingCart}
              removeBook={props.actions.removeBook}
            />
            <div className="collection-item right"><b>Total: {props.shoppingCart.reduce((prev, item) => prev + item.price, 0)}</b></div>
          </div> : <div className="center">Empty Basket</div>
        }
        </div>
      </li>
      <li>
        <div className="collapsible-header"><i className="material-icons">search</i>Search for Books</div>
        <div className="collapsible-body">
          <BookSearchForm
            bookSearchAction={props.actions.bookSearch}
            nameText={props.bookSearch.nameText}
          />
        </div>
      </li>
      <li>
        <div className="collapsible-header"><i className="material-icons">books</i>Search Results</div>
        <div className="collapsible-body">
          <BookSearchResult
            bookSearch={props.bookSearch}
            addBookAction={props.actions.addBook}
           />
        </div>
      </li>
    </ul>
  );
};

BookSearch.propTypes = {
  actions: PropTypes.object.isRequired,
  bookSearch: PropTypes.object.isRequired,
  shoppingCart: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    bookSearch: state.bookSearch,
    shoppingCart: state.shoppingCart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...bookActions, ...shoppingActions}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookSearch);
