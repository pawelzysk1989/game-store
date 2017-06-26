import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

class BookSearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searching: false,
      bookSearch: {
        name: this.props.nameText
      },
      errors: {}
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.searchForBooks = this.searchForBooks.bind(this);
  }

  searchForBooks(e) {
    e.preventDefault();
    if (!this.isFormValid()) {
      return;
    }
    this.setState({ searching: true});
    this.props.bookSearchAction(this.state.bookSearch)
      .then(() => {
        this.setState({ searching: false});
      })
      .catch((error) => {
        this.setState({ searching: false});
        alert(error.response.data.error);
      });
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
        <button className={`btn waves-effect waves-light ${this.state.searching ? 'disabled' : ''}`} type="submit" name="action">Search
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
