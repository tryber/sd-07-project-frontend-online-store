import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCartLogo from './shopping-cart.png';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <br />
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <img src={ shoppingCartLogo } alt="icon shopping cart" />
        </Link>
      </div>
    );
  }
}

export default ProductList;
