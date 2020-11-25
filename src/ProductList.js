import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <div>
        <input />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <button type="button">
            <Link data-testid="shopping-cart-button" to="/ShoppingCart">
              Carrinho de compras
            </Link>
          </button>
      </div>
    );
  }  
}

export default ProductList;