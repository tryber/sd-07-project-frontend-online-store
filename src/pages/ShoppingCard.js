import React, { Component } from 'react';
import ShoppingCartImage from '../images/shopping-cart.svg';
import EmptyBox from '../images/caixa.svg';
import './ShoppingCard.css';

class ShoppingCard extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <img
            className="imagem-card"
            src={ ShoppingCartImage }
            alt="Carrinho de Compras"
          />
          <span className="title">Carrinho de Compras</span>
        </div>
        <div className="content">
          <img
            className="imagem-box"
            src={ EmptyBox }
            alt="Carrinho de Compras"
          />
        </div>
        <div className="footer">
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      </div>
    );
  }
}

export default ShoppingCard;
