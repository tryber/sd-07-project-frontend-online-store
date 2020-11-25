import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
    );
  }
}

export default ShoppingCart;
