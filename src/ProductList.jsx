import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import * from './Images';

class ProductList extends Component {
  render() {
    
    return (
      <div>
        <input type="text" />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      <Link data-testid="shopping-cart-button" to="/PageCard">
        <img src="shoppingCartImage.png" alt="shoppingCart" />
      </Link>
      
      </div>
    );
  }
}

export default ProductList;
