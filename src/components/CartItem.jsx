import React, { Component } from 'react';

class CartItem extends Component {
  constructor() {
    super();
    this.showItem = this.showItem.bind(this);
    this.showSimpleItem = this.showSimpleItem.bind(this);
  }

  showItem() {
    const {
      id,
      title,
      price,
      image,
      number,
      sumItem,
      subtractItem,
      removeItem,
    } = this.props;
    return (
      <div>
        <button
          type="button"
          name={ id }
          onClick={ removeItem }
        >
          X
        </button>
        <img src={ image } alt={ title } />
        <span data-testid="shopping-cart-product-name">
          { title }
        </span>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          name={ id }
          onClick={ subtractItem }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">
          { number }
        </span>
        <button
          data-testid="product-increase-quantity"
          type="button"
          name={ id }
          onClick={ sumItem }
        >
          +
        </button>
        <span>
          R$
          { price }
        </span>
      </div>
    );
  }

  showSimpleItem() {
    const { title, price, image, number } = this.props;
    return (
      <div>
        <img src={ image } alt={ title } />
        <span data-testid="shopping-cart-product-name">
        Descrição:
        { title }
        -
        </span>
        <span data-testid="shopping-cart-product-quantity">
        Qtd:
        { number }
        -
        </span>
        <span>
          R$
          { price }
        </span>
      </div>
    )
  }


  render() {
    const { sumItem } = this.props;
    if(sumItem) {
      return this.showItem();
    }
    return this.showSimpleItem();
  }
}

export default CartItem;
