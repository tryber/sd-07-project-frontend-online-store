import React from 'react';

import * as cartAPI from '../services/cartAPI';
import CartItemSummary from './CartItemSummary';

class CartSummary extends React.Component {
  render() {
    const itemsCart = cartAPI.getCart();
    const ids = Object.keys(itemsCart);
    const zeroItensCart = 0;
    return ids.length === zeroItensCart ? (
      <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
    ) : (
      <div className="cart-summary">
        {Object.keys(itemsCart).map((id) => (
          <CartItemSummary key={ id } id={ id } />
        ))}
        <p>
          Total: R$
          {cartAPI.returnPrice()}
        </p>
      </div>
    );
  }
}

export default CartSummary;
