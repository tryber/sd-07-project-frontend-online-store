import React, { Component } from 'react';
import EmptyBox from '../images/caixa.svg';
import './EmptyList.css';

class EmptyList extends Component {
  render() {
    return (
      <div>
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

export default EmptyList;
