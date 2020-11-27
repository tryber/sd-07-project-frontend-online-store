import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { title, thumbnail, price, id, quantity } = this.props;
    return (
      <div key={ id }>
        <h2 data-testid="shopping-cart-product-name">{title}</h2>
        <img src={ thumbnail } alt="thumb" />
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartItem;
