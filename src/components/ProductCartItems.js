import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCartItems extends Component {
  render() {
    const { item: { title, price, thumbnail } } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ price }</p>
      </div>
    );
  }
}

ProductCartItems.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCartItems;
