import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {

  constructor() {
    super();

    this.state = {
      cart: {}
    }
  }
  
  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <h2 data-testid="shopping-cart-product-name">{title}</h2>
        <p data-testid="shopping-cart-product-quantity">Quantidade:</p>

        <div data-testid="shopping-cart-product-name">
          <p>{ state.title }</p>
        </div>
        <button data-testid="shopping-cart-button">Finalizar compra</button>
        <p data-testid="shopping-cart-product-quantity"></p>
        <Link
          to="/"
        >
          <button type="button">Voltar</button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
