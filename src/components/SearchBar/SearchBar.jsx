import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchInput, onSearchInput } = this.props;
    return (
      <input value={ searchInput } onChange={ onSearchInput } />
    );
  }
}

SearchBar.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onSearchInput: PropTypes.func.isRequired,
};

export default SearchBar;
