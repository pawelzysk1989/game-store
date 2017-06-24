import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import GameSearchSlider from './GameSearchSlider';

class GameSearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: {
        gameSearch: this.props.gameSearchOptions.searchText
      },
      errors: {}
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.searchForGames = this.searchForGames.bind(this);
  }

  searchForGames(e) {
    e.preventDefault();
    if (!this.isFormValid()) {
      return;
    }
    console.log("submitted");
  }

  isFormValid() {
    const errors = {};
    if (this.state.search.gameSearch.length < 3) {
      errors.gameSearch = "Please type at least 3 characters";
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
    let search = this.state.search;
    search[field] = event.target.value;
    return this.setState ({
      search: search,
      errors: {...this.state.errors, [field]: ""}
    });
  }

  onSliderChange(value) {
    console.log(value);
  }

  render() {
    const { min, max, val}  = this.props.gameSearchOptions.searchCostRange;
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons">games</i>Games</div>
        <div className="collapsible-body">
          <form onSubmit={this.searchForGames}>
            <TextInput
              name="gameSearch"
              label="Search"
              onChange={this.onInputChange}
              value={this.state.search.gameSearch}
              error={this.state.errors.gameSearch}
            />
            <button className="btn waves-effect waves-light" type="submit" name="action">Search
              <i className="material-icons right">search</i>
            </button>
          </form>
          <GameSearchSlider 
            name="price"
            label="Price"
            onChange={this.onSliderChange} 
            min={min} 
            max={max} 
            defaultValue={val} 
            unit="$"/>
        </div>
      </li>
    );
  }
}

GameSearchForm.propTypes = {
  gameSearch: PropTypes.func.isRequired,
  gameSearchOptions: PropTypes.object.isRequired
};

export default GameSearchForm;
