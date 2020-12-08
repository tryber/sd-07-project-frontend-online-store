import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class SearchBar extends Component {
  render() {
    const { onSearchText, searchText } = this.props;
    return (
      <input
        className="search-bar"
        data-testid="query-input"
        onChange={ onSearchText }
        value={ searchText }
      />
    );
  }
}

SearchBar.propTypes = {
  onSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
