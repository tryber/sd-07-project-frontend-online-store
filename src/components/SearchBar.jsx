import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { query, onChange, onClick, cartSize } = this.props;
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

        <Link
          data-testid="shopping-cart-button"
          className="cartButton"
          to="/pages/shopping-cart"
        >
          Carrinho
          <span
            className="cart-quantity"
            data-testid="shopping-cart-size"
          >
            { cartSize }
          </span>
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
  cartSize: propTypes.number.isRequired,
};
