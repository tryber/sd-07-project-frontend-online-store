import React from 'react';
import '../App.css';

class Cart extends React.Component {
  render() {
    return (
      <p
        data-testid="shopping-cart-empty-message"
        className="empty-cart"
      >
        Seu carrinho está vazio
      </p>
    );
  }
}

export default Cart;
