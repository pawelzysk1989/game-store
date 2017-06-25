import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

class BookSearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      bookSearch: {
        name: this.props.nameText
      },
      errors: {}
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.searchForBooks = this.searchForBooks.bind(this);
  }

  searchForBooks(e) {
    e.preventDefault();
    if (!this.isFormValid()) {
      return;
    }
    this.props.bookSearchAction(this.state.bookSearch);
  }

  isFormValid() {
    const errors = {};
    if (this.state.bookSearch.name.length < 3) {
      errors.name = "Please type at least 3 characters";
    }
    if (Object.keys(errors).length === 0) {
      return true;
    } 
    this.setState({
      errors
    });
    return false;
    
  }

  onInputChange(event) {
    const field = event.target.name;
    let search = this.state.bookSearch;
    search[field] = event.target.value;
    return this.setState ({
      bookSearch: search,
      errors: {...this.state.errors, [field]: ""}
    });
  }

  onSliderChange(value) {
    console.log(value);
  }

  render() {
    return (
      <form onSubmit={this.searchForBooks}>
        <TextInput
          name="name"
          label="Search"
          onChange={this.onInputChange}
          value={this.state.bookSearch.name}
          error={this.state.errors.name}
        />
        <button className="btn waves-effect waves-light" type="submit" name="action">Search
          <i className="material-icons right">search</i>
        </button>
      </form>
    );
  }
}

BookSearchForm.propTypes = {
  bookSearchAction: PropTypes.func.isRequired,
  nameText: PropTypes.string.isRequired
};

export default BookSearchForm;
