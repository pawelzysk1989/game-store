import React from 'react';
import PropTypes from 'prop-types';
import BookSearchSlider from './BookSearchSlider';

class BookSearchResult extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(this.props.bookSearch.costRange.val)
    this.state = {
      priceOnSlider: this.props.bookSearch.costRange.val
    };
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSliderChange(value) {
    this.setState({
      priceOnSlider: value
    })
  }

  displayBooks(list, priceOnSlider, currency) {
    return list.map((book, i) => {
      return (
        <div key={i} className="col s12 m6 l3 xl2">
          <div className="card">
            <div className="card-image">
              <img src={book.image}/>
              <span className="card-title">{book.name}</span>
              <a className={`btn-floating halfway-fab waves-effect waves-light red ${priceOnSlider > book.price ? "" : "disabled"}`}>
              <i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <p>Price: {`${book.price.toFixed(2)} ${currency}`}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { costRange: {min, max, val}, list } = this.props.bookSearch;
    const currency = "$";
    const priceOnSlider = this.state.priceOnSlider;
    return (
      <div className="results">
        { list.length > 0 ? 
          <div className="bookSearchResult">
            <BookSearchSlider 
              name="price"
              label="Price"
              onChange={this.onSliderChange} 
              min={min} 
              max={max} 
              defaultValue={val} 
              unit={currency}
            />
            <div className="row">
              {this.displayBooks(list, priceOnSlider, currency)}
            </div>
          </div> : <div className="center">No Results</div>}
      </div>
    );
  }
}

BookSearchResult.propTypes = {
  bookSearch: PropTypes.object.isRequired
};

export default BookSearchResult;
