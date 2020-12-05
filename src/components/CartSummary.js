import React from 'react';

import * as cartAPI from '../services/cartAPI';
import CartItem from './CartItem';

class CartSummary extends React.Component {
  render() {
    const itemsId = cartAPI.getCart();
    const valuesItemsId = Object.values(itemsId)
    return valuesItemsId.length === 0 ? (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    ) : (
      <div className="cart-summary">
        {valuesItemsId.map((id) => (
          <CartItem key={Object.keys(id)} itemId={id} />
        ))}
        <p>Total: R${cartAPI.returnPrice()}</p>
      </div>
    );
  }
}

export default CartSummary;
