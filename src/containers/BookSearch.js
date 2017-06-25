import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../actions/bookSearchActions';
import BookSearchForm from '../components/BookSearchForm';
import BookSearchResult from '../components/BookSearchResult';

export const BookSearch = (props) => {
  return (
    <ul className="collapsible" data-collapsible="expandable">
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
           />
        </div>
      </li>
    </ul>
  );
};

BookSearch.propTypes = {
  actions: PropTypes.object.isRequired,
  bookSearch: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    bookSearch: state.bookSearch
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookSearch);
