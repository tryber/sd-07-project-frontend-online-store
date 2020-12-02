import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShoppingCartButton.css';
import shoppingCartLogo from './shopping-cart.png';

class ShoppingCartButton extends Component {
  render() {
    const { quantity } = this.props;
    return (
      <Link
        to="/shoppingcart"
        data-testid="shopping-cart-button"
      >
        <img
          src={ shoppingCartLogo }
          alt="icon shopping cart"
        />
        <span
          className="badge badge-warning"
          data-testid="shopping-cart-size"
          id="span-cart-size"
        >
          { quantity }
        </span>
      </Link>
    );
  }
}

ShoppingCartButton.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default ShoppingCartButton;
