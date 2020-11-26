import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { item: { title, cartQuantity } } = this.props;
    return (
      <article>
        <h2 data-testid="shopping-cart-product-name">{title}</h2>
        <p data-testid="shopping-cart-product-quantity">{cartQuantity}</p>
      </article>);
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cartQuantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
