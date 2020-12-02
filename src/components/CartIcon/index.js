import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CartIcon({ cartItems }) {
  return (
    <>
      <Link to="/cart" data-testid="shopping-cart-button">
        Cart
      </Link>
      {
        cartItems && <p data-testid="shopping-cart-size">{cartItems}</p>
      }
    </>
  );
}

CartIcon.propTypes = { cartItems: PropTypes.number.isRequired };

export default CartIcon;
