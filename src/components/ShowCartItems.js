import React from 'react';
import PropTypes from 'prop-types';
import { handleQuantity } from '../services/localStorageHandler';

class ShowCartItems extends React.Component {
  render() {
    const { item: { id, title, price, quantity }, updateCart } = this.props;
    return (
      <div>
        <div data-testid="shopping-cart-product-name">
          {title}
        </div>
        <div>
          {price}
        </div>
        <div data-testid="shopping-cart-product-quantity">
          {quantity}
        </div>
        <div>
          <button
            type="button"
            data-testid="product-increase-quantity"
            name="increase"
            onClick={ () => {
              handleQuantity({ id: [id], action: 'increase' });
              updateCart();
            } }
          >
            +
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            name="decrease"
            onClick={ () => {
              handleQuantity({ id: [id], action: 'decrease' });
              updateCart();
            } }
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

ShowCartItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.any.isRequired,
  }).isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default ShowCartItems;
