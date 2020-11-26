import React, { Component } from 'react';

class ShoppingCart extends Component {
  render () {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
        </h1>
      </div>
    );
  }
}

export default ShoppingCart;