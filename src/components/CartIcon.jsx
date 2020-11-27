import React, { Component } from 'react';

class CartIcon extends Component {
  
  render() {
    const { quantity } = this.props;

    return (
      <div>
          <img alt="cart icon"></img>
          <span data-testid="shopping-cart-size">{quantity}</span>
      </div>
    )
  }
}

export default CartIcon;
