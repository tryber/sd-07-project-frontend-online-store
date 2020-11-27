import React, { Component } from 'react';

class CartItem extends Component {

  render() {
    const { id, title, price, image, number, sumItem, subtractItem, removeItem } = this.props;
    return (
      <div>
        <button
        name={id}
        onClick={removeItem}>X</button>
        <img src={image} alt={title} />
        <span data-testid="shopping-cart-product-name">{title}</span>
        <button 
          data-testid="product-decrease-quantity"
          name={id}
          onClick={subtractItem}>-</button>
        <span data-testid="shopping-cart-product-quantity">{number}</span>
        <button
          data-testid="product-increase-quantity"
          name={id}
          onClick={sumItem}>+</button>
        <span>{price}</span>
      </div>
    );
  }
}

export default CartItem;
