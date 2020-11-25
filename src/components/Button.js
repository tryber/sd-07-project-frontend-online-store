/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import '../images/cart.png';

const Button = ({ onClick }) => (
  <button
    data-testeid="shopping-cart-button"
    type="button"
    onClick={ onClick }
  >
    <img href="cart.png" alt="Carrinho de Compras" />
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
