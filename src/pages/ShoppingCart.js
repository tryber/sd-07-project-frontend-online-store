import React, { Component } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <FontAwesomeIcon icon={ faShoppingCart } />
      </div>
    );
  }
}

export default ShoppingCart;
