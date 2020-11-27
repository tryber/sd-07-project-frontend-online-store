import React from 'react';
import PropTypes from 'prop-types';

class ItemCart extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <p>{ price }</p>
        <span data-testid="shopping-cart-product-quantity">1</span>
      </div>
    );
  }
}

ItemCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ItemCart;
