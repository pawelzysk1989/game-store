import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/gameSearchActions';
import GameSearchForm from '../components/GameSearchForm';

export const GameSearch = (props) => {
  return (
    <ul className="collapsible" data-collapsible="accordion">
      <GameSearchForm
        gameSearch={props.actions.gameSearch}
        gameSearchOptions={props.gameSearchOptions}
      />
    </ul>
  );
};

GameSearch.propTypes = {
  actions: PropTypes.object.isRequired,
  gameSearchOptions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    gameSearchOptions: state.gameSearch
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSearch);
