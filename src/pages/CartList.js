import React from 'react';

import * as cartAPI from '../services/cartAPI';
import CartItem from '../components/CartItem';

class CartList extends React.Component {
  render() {
    const itemsId = cartAPI.getCart();
    return Object.keys(itemsId).length === 0 ? (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    ) : (
      <div data-testid="item-cart">
        {Object.values(itemsId).map((id) => (
          <CartItem key={ Object.keys(id) } itemId={ id } />
        ))}
        <p>
          <b>Valor Total da Compra: </b>
          XXX, XX
        </p>
        <button type="submit">Finalizar Compra</button>
      </div>
    );
  }
}

export default CartList;
