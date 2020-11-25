import React from 'react';
import PropTypes from 'prop-types';
import Category from './categoryList';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
            id="text-input"
            name="searchText"
            value=''
            onChange=''
            type="text"
            />
          </label>
          <Category />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired, 
};

export default SearchBar; 
