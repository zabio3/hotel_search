import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPlace, startSearch } from '../actions/index.js';

const SearchForm = props => (
  <form
    className="search-form"
    onSubmit={(e) => {
      e.preventDefault();
      props.startSearch(props.place);
    }}
  >
    <input
      className="place-input"
      type="text"
      value={props.place}
      onChange={(e) => {
        e.preventDefault();
        props.setPlace(e.target.value);
      }}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    place: state.place,
  }),
  { setPlace, startSearch },
)(SearchForm);