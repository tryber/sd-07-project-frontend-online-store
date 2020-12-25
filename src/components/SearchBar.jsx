import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  render() {
    const { handleChange, fetchApi, counter } = this.props;
    return (
      <div>
        <div className="header-container">
          <div className="search">
            <div className="search-bar-content">
              <input
                className="search-bar"
                data-testid="query-input"
                type="text"
                name="searchElement"
                onChange={ handleChange }
              />
              <button
                type="button"
                data-testid="query-button"
                onClick={ fetchApi }
              >
                Buscar
              </button>
            </div>
            <div data-testid="home-initial-message">
              <p className="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            </div>
          </div>
          <Link
            to="/cart"
            className="shopping-btn"
            data-testid="shopping-cart-button"
          >
            <img src="https://img.favpng.com/12/18/15/shopping-cart-icon-png-favpng-e5DiMUYLNYaTjdsibphFUCAxC.jpg" width="30px" alt="cart" />
          </Link>
          <p data-testid="shopping-cart-size">{counter}</p>
        </div>
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  fetchApi: PropTypes.func,
  handleChange: PropTypes.func,
}.isRequired;
