import React from 'react';
import PropTypes from 'prop-types';
import IncreaseDecrease from '../IncreaseDecrease';

const CartItem = ({ title, quantity, index, increase: inc, decrease: dec }) => (
  <div id="cart-item" key={ title }>
    <span data-testid="shopping-cart-product-name">{ title }</span>
    <p>
      Quantidade:
      <span data-testid="shopping-cart-product-quantity">{quantity}</span>
      <IncreaseDecrease index={ index } qt={ quantity } inc={ inc } dec={ dec } />
    </p>
  </div>
);

export default CartItem;

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};
