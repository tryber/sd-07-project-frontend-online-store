import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as localStorage from '../services/localStorage';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.productsList = this.productsList.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      cart: localStorage.readCart(),
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const cart = localStorage.readCart();
    this.setState({ cart });
  }

  emptyMessage() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio.
      </p>
    );
  }

  productsList() {
    const { cart } = this.state;
    return (
      <div className="cart-products">
        { cart.map(({ amount, title, id }) => (
          <div className="product" key={ id }>
            <p
              className="product-title"
              data-testid="shopping-cart-product-name"
            >
              { title }
            </p>
            <p
              className="product-qtd"
              data-testid="shopping-cart-product-quantity"
            >
              { amount }
            </p>
          </div>
        ))}
        <Link to="/checkout" data-testid="checkout-products">
          <button type="button">
            Finalizar compra
          </button>
        </Link>
      </div>
    );
  }

  render() {
    const { cart } = this.state;
    const zero = 0;
    let cartItemsLength;
    if (cart) {
      cartItemsLength = cart.length;
    } else cartItemsLength = zero;

    if (cartItemsLength) {
      return (this.productsList());
    }
    return (
      this.emptyMessage()
    );
  }
}
