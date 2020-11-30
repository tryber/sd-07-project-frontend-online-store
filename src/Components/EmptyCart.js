import React from 'react';

class EmptyCart extends React.Component {
  render() {
    return(
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <img
          className="box-empty"
          src="https://image.flaticon.com/icons/png/512/15/15457.png"
          alt="caixa fazia"
        />
      </div>
    )
  }
}

export default EmptyCart;