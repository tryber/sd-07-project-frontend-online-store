import React from 'react';
import '../App.css';

class Cart extends React.Component {
  constructor() {
    super();
    this.loadList = this.loadList.bind(this);
  }

  loadList() {
    const values = Object.values(localStorage);
    values.forEach((value) => {
      const { id, title, price, } = JSON.parse(value);
    });
  }

  render() {
    return (
      <p
        data-testid="shopping-cart-empty-message"
        className="empty-cart"
        onLoad={ this.loadList() }
      >
        Seu carrinho está vazio
      </p>
    );
  }
}

export default Cart;
