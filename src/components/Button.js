/* eslint-disable no-unused-vars */
import React from 'react';
// import PropTypes from 'prop-types';
import '../images/cart.png';
import { Link } from 'react-router-dom';


const Button = () => (
  <button data-testeid="shopping-cart-button" type="button">
    <Link to="../pages/cart.js"><img href="cart.png" alt="Carrinho de Compras" /></Link>
  </button>
);

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default Button;
