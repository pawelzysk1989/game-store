import React from 'react';
import PropTypes from 'prop-types';
import BookSearchSlider from './BookSearchSlider';
import BookSerachResultItem from './BookSerachResultItem';
import toastr from 'toastr';

class BookSearchResult extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      priceOnSlider: this.props.bookSearch.costRange.val
    };
    this.onSliderChange = this.onSliderChange.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  onSliderChange(value) {
    this.setState({
      priceOnSlider: value
    });
  }

  addBook(i) {
    const selectedBook = this.props.bookSearch.list[i];
    const existingIndex = this.props.shoppingCart.findIndex( elem => elem.id === selectedBook.id);
    if (existingIndex === -1) {
      this.props.addBookAction(this.props.bookSearch.list[i]);
      toastr.success('Book added to your shopping cart');
    }
    else {
      toastr.warning('Book already added');
    }
    
  }

  render() {
    const { costRange: {min, max}, list } = this.props.bookSearch;
    const currency = "$";
    const priceOnSlider = this.state.priceOnSlider;
    return (
      <div className="results">{ 
        list.length > 0 ? 
        <div className="bookSearchResult">
          <BookSearchSlider 
            name="price"
            label="Price"
            onChange={this.onSliderChange} 
            min={min} 
            max={max} 
            defaultValue={priceOnSlider} 
            unit={currency}
          />
          <div className="row bookList">{
            list.map((book, i) => {
              return (
                  <BookSerachResultItem key={book.id} book={book} priceOnSlider={priceOnSlider} currency={currency} addBook={this.addBook} index={i}/>
              );
            })
          }
          </div>
        </div> : <div className="center">No Results</div>
      }
      </div>
    );
  }
}

BookSearchResult.propTypes = {
  bookSearch: PropTypes.object.isRequired,
  addBookAction: PropTypes.func.isRequired,
  shoppingCart: PropTypes.array.isRequired
};

export default BookSearchResult;
