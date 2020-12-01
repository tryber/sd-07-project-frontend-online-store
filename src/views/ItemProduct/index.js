import React, { Component } from 'react';
import * as css from './style';
import * as icon from '../../components/Icons';
import * as view from '../../views';

export class ItemProduct extends Component {
  constructor() {
    super();
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  handleEventClick(amount) {
    console.log(amount);
  }

  render() {
    const { title, price, amount, thumbnail } = this.props.product;
    return (
      <css.Ctn>
        <icon.Close />
        <img src={thumbnail} />
        <h4 className="ctn-title" data-testid="shopping-cart-product-name">
          {title}
        </h4>
        <view.AmountControllers onClick={this.handleEventClick} amount={amount} />
        <p>{price}</p>
      </css.Ctn>
    );
  }
}

export default ItemProduct;
