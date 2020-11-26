import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { title, price, image, number } = this.props;
    return (
      <div >
        <img src={image} alt={title} />
        <span data-testid="shopping-cart-product-name">{title}</span>
        <h2>-</h2>
        <span data-testid="shopping-cart-product-quantity">{number}</span>
        <h2>+</h2>
        <span>{price}</span>
      </div>
    );
  }
}

export default CartItem;