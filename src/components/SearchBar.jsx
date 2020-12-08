import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  render() {
    const { handleChange, fetchApi } = this.props;
    return (
      <div>
        <div>
          <div>
            <input
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
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </div>
          <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
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
