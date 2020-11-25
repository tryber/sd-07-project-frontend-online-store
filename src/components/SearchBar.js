import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label>
          <button type="button">Botão de pesquisa</button>
          <input type="text"/>
        </label>
        <Link to="/shoppingCart">
          <button type="button" data-testid="shopping-cart-button">
            Carrinho de compras
          </button>
        </Link>
      </div>
    );
  }
}

export default SearchBar;
