import React, {Component} from 'react';
import * as api from '../services/api';

export default class ShoppingCart extends Component {
  emptyMessage() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio.
      </p>
    );
  }
  productsList() {
    const cart = api.readCart();
    return (
      <div className="cart-products">
        { cart.map(({ thumbnail, qtd, title, price, id }) => (
          <div className="product" key={id}>
            <p className="product-title" data-testid="shopping-cart-product-name">{title}</p>
          </div>
        ))}
      </div>
    );
  }
  render() {
    const cartItemsLength = Object.keys(api.readCart()).length;
    console.log(cartItemsLength);
    return (
      <div>
        {cartItemsLength.length ? this.productsList() : this.emptyMessage()}
      </div>
    )
  }
}

