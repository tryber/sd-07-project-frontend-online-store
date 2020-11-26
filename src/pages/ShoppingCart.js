import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
        <div>
          <h1 data-testid="shopping-cart-product-name">Produto</h1>
          <h2 data-testid="shopping-cart-product-quantity">0</h2>
        </div>
      </div>

    );
  }
}

export default ShoppingCart;
