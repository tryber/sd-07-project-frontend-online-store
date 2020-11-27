import React, { Component } from 'react';

class CartIcon extends Component {
  render() {
    const { cartItens } = this.props;
    let quantity = '0';
    quantity = parseInt(quantity);
    if (cartItens !== null) {
      cartItens.forEach((item) => {
      quantity += item.number;
      });
    }
    return (
      <div>
        <img alt="cart icon"></img>
        <span data-testid="shopping-cart-size">{quantity}</span>
      </div>
    );
  }
}

export default CartIcon;
