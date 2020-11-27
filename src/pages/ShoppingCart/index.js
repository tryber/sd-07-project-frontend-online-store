import React, { Component } from 'react';

import * as cartApi from '../../services/cartApi';
import CartItem from '../../components/CartItem';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.handleCartItemIncrease = this.handleCartItemIncrease.bind(this);
    this.handleCartItemRemove = this.handleCartItemRemove.bind(this);
    this.handleCartItemDecrease = this.handleCartItemDecrease.bind(this);
    this.state = {
      cart: [],
      cartTotal: 0,
    };
  }

  componentDidMount() {
    this.updateCart();
  }

  getTotalValue(total, product) {
    return total + product.price * product.cartQuantity;
  }

  updateCart() {
    const initialValue = 0;
    const cart = cartApi.getCartList();
    const cartTotal = cart.reduce(this.getTotalValue, initialValue);
    this.setState({
      cart,
      cartTotal,
    });
  }

  handleCartItemIncrease(product) {
    cartApi.addToCart(product);
    this.updateCart();
  }

  handleCartItemRemove(product) {
    cartApi.removeFromCart(product);
    this.updateCart();
  }

  handleCartItemDecrease(product) {
    cartApi.decreaseToCart(product);
    this.updateCart();
  }

  render() {
    const { cart, cartTotal } = this.state;
    return (
      <div>
        <h4 data-testid="shopping-cart-empty-message">
          {!cart.length && <p>Seu carrinho está vazio.</p> }
          {cart.map((cartItem) => (
            <CartItem
              key={ cartItem.id }
              data={ cartItem }
              addItem={ this.handleCartItemIncrease }
              removeItem={ this.handleCartItemRemove }
              decreaseItem={ this.handleCartItemDecrease }
            />
          ))}
        </h4>
        <footer>
          <h5>
            {`Valor total R$ ${cartTotal}`}
          </h5>
        </footer>
      </div>
    );
  }
}

export default ShoppingCart;
