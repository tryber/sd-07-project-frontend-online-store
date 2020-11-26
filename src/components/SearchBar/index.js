import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shoppingCartLogo from './shopping-cart.png';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    const { handleChange, handleClick, purchasedProducts } = this.props;
    return (
      <div className="search-container">
        <input
          type="text"
          name="query"
          data-testid="query-input"
          onChange={ handleChange }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
        <br />
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link
          to={ {
            pathname: '/shoppingcart',
            purchasedProducts,
          } }
          data-testid="shopping-cart-button"
        >
          <img
            src={ shoppingCartLogo }
            alt="icon shopping cart"
          />
        </Link>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  purchasedProducts: PropTypes.arrayOf.isRequired,
};

export default SearchBar;
