import React, { Component } from 'react';

import CartItem from '../../components/CartItem';
import { getCartList } from '../../services/cartApi';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.updateCart();
  }

  updateCart() {
    this.setState({ cart: getCartList() });
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <h4 data-testid="shopping-cart-empty-message">
          {!cart.length && <p>Seu carrinho está vazio.</p> }
          {cart.map((cartItem) => <CartItem key={ cartItem.id } item={ cartItem } />)}
        </h4>
      </div>
    );
  }
}

export default ShoppingCart;
