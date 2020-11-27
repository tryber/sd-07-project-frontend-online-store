import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { item } = this.props;
    const { title, thumbnail, price, quantity } = item;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <h3 data-testid="shopping-cart-product-quantity">{ quantity }</h3>
        <h4>{ price }</h4>
        {console.log(title)}
      </div>
    );
  }
}
CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
