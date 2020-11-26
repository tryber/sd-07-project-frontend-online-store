import React from 'react';
import ShoppingCartIcon from '../components/Shopping-cart-icon';
import Cart from '../components/Cart';

class ShoppingCart extends React.Component{
  render() {
    return (
      <div>
        <div>
        <ShoppingCartIcon />
        <h3>Carrinho de compras</h3>
        </div>
        <Cart />
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    )
  }
}

export default ShoppingCart;
