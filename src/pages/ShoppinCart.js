import React from 'react';
import { Link } from 'react-router-dom';
import voltar from '../icon/voltar.png'
import '../App.css';

class ShoppinCart extends React.Component {
  render() {
    return (
      <div className="cart">
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>
        <Link to="/" >
            <img className="voltar" src={voltar} alt="imagem-Voltar"/>
        </Link>
      </div>
    );
  }
}

export default ShoppinCart;
