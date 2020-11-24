import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends Component {
  render() {
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/shopping-cart"
      >
        Carrinho de compras
      </Link>
    );
  }
}

export default ShoppingCartButton;
