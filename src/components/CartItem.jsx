import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { title, price, image } = this.props;
    return (
      <div data-testid="shopping-cart-product-name" >
        <img src={image} alt={title} />
        <span>{title}</span>
        <h2>-</h2>
        <span data-testid="shopping-cart-product-quantity">Quantidade</span>
        <h2>+</h2>
        <span>{price}</span>
      </div>
    );
  }
}

export default CartItem;