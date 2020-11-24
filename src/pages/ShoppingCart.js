import React, { Component } from 'react';
import Header from '../components/Header';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="class-name">
        <Header
          text="Carrinho de Compras"
          imagePath="images/icons-shopping-cart.png"
          imagePathReply="images/reply-arrow.png"
        />
        <img
          src="images/empty-box.png"
          alt="Carrinho de Compras"
        />
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}
