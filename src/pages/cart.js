import React from 'react';
import box from '../images/box.png';


class Cart extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
        <div>
          <img src={ box } alt="Caixa Vazia" />
        </div>
      </div>
    );
  }
}

export default Cart;
