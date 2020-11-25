import React from 'react';
import '../images/box.png';

class Cart extends React.Component {
  render() {
    const msg = <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    return (
      <div>
        <div>
          { msg }
        </div>
        <div>
          <img src="box.png" alt="Caixa Vazia" />
        </div>
      </div>
    );
  }
}

export default Cart;
