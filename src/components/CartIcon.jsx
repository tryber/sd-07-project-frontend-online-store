import React, { Component } from 'react';

class CartIcon extends Component {
  render() {
    const { cartItens } = this.props;
    const quantity = 0;
    if (cartItens !== null) cartItens.forEach((item) => {
      quantity += item.number
    });
    return (
      <div>
        <img alt="cart icon"></img>
        <span data-testid="shopping-cart-size">{quantity}</span>
      </div>;
    );
  }
}

export default CartIcon;
