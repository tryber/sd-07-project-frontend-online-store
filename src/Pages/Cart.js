import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <img
          className="box-empty"
          src="https://image.flaticon.com/icons/png/512/15/15457.png"
          alt="caixa fazia"
        />
        <h3
          className="paragraph-termo"
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </h3>
      </div>
    );
  }
}

export default Cart;
