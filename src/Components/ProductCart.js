import React from 'react';
import PropTypes from 'prop-types';

class ProductCart extends React.Component {
  render() {
    const { product, increaseItem, decreaseItem } = this.props;
    const { id, thumbnail, title, quantity, price } = product;
    return (
      <div>
        <button
          type="button"
        >
          X
        </button>

        <img
          src={ thumbnail }
          alt={ title }
        />

        <span
          data-testid="shopping-cart-product-name"
        >
          { title }
        </span>

        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => decreaseItem(id) }
        >
          -
        </button>

        <span
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </span>

        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => increaseItem(id) }
        >
          +
        </button>

        <span>
          R$
          { ` ${price}` }
        </span>
      </div>
    );
  }
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};

export default ProductCart;
