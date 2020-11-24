import React, { Component } from 'react';
import Header from '../components/Header';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="class-name">
        <Header
          text="Carrinho de Compras"
          imagePath="images/shopping-cart-50.png"
          imagePathReply="images/reply-arrow-red-50.png"
        />
        <img
          src="images/empty-shopping-basket-red.png"
          alt="Carrinho de Compras"
        />
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}
