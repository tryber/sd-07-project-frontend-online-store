import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuantityControl extends Component {
  render() {
    const { item, handleClick, availableQuantity } = this.props;
    const { product, quantity } = item;
    return (
      <div className="quantity-container">
        <button
          type="button"
          data-testid="product-decrease-quantity"
          disabled={ quantity <= 1 }
          onClick={ () => {
            handleClick({ product, quantity: quantity - 1 });
          } }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          disabled={ quantity >= availableQuantity }
          onClick={ () => {
            handleClick({ product, quantity: quantity + 1 });
          } }
        >
          +
        </button>
      </div>
    );
  }
}

QuantityControl.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  availableQuantity: PropTypes.number.isRequired,
};

export default QuantityControl;
