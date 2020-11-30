import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutProductItem extends Component {
  render() {
    const { item } = this.props;
    const { thumbnail, title, price, quantity } = item;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <p>
          <span>{title}</span>
        </p>
        <p>
          Price:
          {' '}
          <span>{price}</span>
        </p>
        <p>
          Quantity:
          {' '}
          <span>{quantity}</span>
        </p>

      </div>
    );
  }
}

CheckoutProductItem.propTypes = {
  item: PropTypes.shape.isRequired,
};

export default CheckoutProductItem;
