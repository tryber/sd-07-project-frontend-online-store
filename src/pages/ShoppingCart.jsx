import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <h2 data-testid="shopping-cart-product-name">{title}</h2>
        <p data-testid="shopping-cart-product-quantity">Quantidade:</p>
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
