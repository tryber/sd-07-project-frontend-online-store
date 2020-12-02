import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as css from './style';
import * as cpIcons from '../../../components/Icons';
import * as view from '../..';

class ItemProduct extends Component {
  constructor() {
    super();
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  handleEventClick(amount) {
    console.log(amount);
  }

  render() {
    const { product } = this.props;
    const { title, price, amount, thumbnail } = product;
    return (
      <css.Ctn>
        <cpIcons.Close />
        <img src={ thumbnail } alt={ title } />
        <h4 className="ctn-title" data-testid="shopping-cart-product-name">
          {title}
        </h4>
        <view.AmountControllers
          onClick={ this.handleEventClick }
          amount={ amount }
        />
        <p>{price}</p>
      </css.Ctn>
    );
  }
}

ItemProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ItemProduct;
