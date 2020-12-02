import React from 'react';
import box from '../images/box.png';
import '../App.css';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <img
          className="btBox"
          src={ box }
          alt="Caixa Vazia"
        />
      </div>
    );
  }
}

export default Cart;
