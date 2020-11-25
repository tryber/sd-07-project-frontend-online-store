import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>
    );
  }
}

export default ShoppingCart;
