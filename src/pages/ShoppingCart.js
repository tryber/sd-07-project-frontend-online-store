import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="class-name">
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    );
  }
}
