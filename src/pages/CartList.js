import React from 'react';
import { Link } from 'react-router-dom';



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
          <CartItem key={Object.keys(id)} itemId={id} />
        ))}
        <Link data-testid="checkout-products" to="/checkout">
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default CartList;
