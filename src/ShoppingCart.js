import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    )
  }
}

export default ShoppingCart;