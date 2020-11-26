import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoToShoppingCart from './GoToShoppingCart';

class SearchBar extends Component {
  render() {
    const { onSearch, inputChange, inputValue } = this.props;
    return (
      <div>
        <label htmlFor="searchButton">
          <button
            id="searchButton"
            type="button"
            onClick={ onSearch }
            data-testid="query-button"
          >
            Botão de pesquisa
          </button>
          <input
            type="text"
            onChange={ inputChange }
            value={ inputValue }
            data-testid="query-input"
          />
        </label>
        <GoToShoppingCart />
      </div>
    );
  }
}

SearchBar.propTypes = {
  inputValue: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default SearchBar;
