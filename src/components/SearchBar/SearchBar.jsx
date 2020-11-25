import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchInput, onSearchInput, onSubmit } = this.props;
    return (
      <div>
        <input data-testid="query-input" value={ searchInput } onChange={ onSearchInput } />
        <button data-testid="query-button" onClick={ onSubmit } type="submit">Buscar</button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onSearchInput: PropTypes.func.isRequired,
};

export default SearchBar;
