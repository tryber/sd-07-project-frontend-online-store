import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ title, quantity, add, minus, availableQt }) => (
  <div id="cart-item" key={ title }>
    <span data-testid="shopping-cart-product-name">{ title }</span>
    <p>
      Quantidade:
      <span data-testid="shopping-cart-product-quantity">{quantity}</span>
      <button
        type="button"
        data-testid="product-increase-quantity"
        onClick={ add }
        disabled={ quantity === availableQt }
      >
        <i className="fas fa-plus" />
      </button>

      <button
        type="button"
        data-testid="product-decrease-quantity"
        onClick={ minus }
        disabled={ quantity === 1 }
      >
        <i className="fas fa-minus" />
      </button>
    </p>
  </div>
);

export default CartItem;

CartItem.defaultProps = { availableQt: undefined };

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  availableQt: PropTypes.number,
  add: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
};
