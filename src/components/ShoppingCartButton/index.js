import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCartButton.css';
import shoppingCartLogo from './shopping-cart.png';

class ShoppingCartButton extends Component {
  render() {
    return (
      <Link
        to="/shoppingcart"
        data-testid="shopping-cart-button"
      >
        <img
          src={ shoppingCartLogo }
          alt="icon shopping cart"
        />
      </Link>
    );
  }
}

export default ShoppingCartButton;
