import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../components/Shopping-cart-icon';
import Cart from '../components/Cart';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <ShoppingCartIcon />
            <h3>Carrinho de compras</h3>
          </div>
          <Cart />
        </div>
        <Link data-testid="checkout-products" to="/payment" />
      </div>
    );
  }
}

export default ShoppingCart;
