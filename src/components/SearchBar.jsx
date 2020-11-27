import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { query, onChange, onClick } = this.props;
    return (
      <header>
        <input
          name="query"
          type="text"
          data-testid="query-input"
          id="search-input"
          value={ query }
          onChange={ onChange }
        />

        <button
          type="button"
          onClick={ onClick }
          data-testid="query-button"
        >
          Pesquisar
        </button>

        <Link data-testid="shopping-cart-button" to="/pages/shopping-cart">
          Carrinho
        </Link>
      </header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  query: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
};
