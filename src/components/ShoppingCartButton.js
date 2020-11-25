import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconShoppingCart from '../icons/IconShoppingCart';

class ShoppingCartButton extends Component {
  render() {
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/shopping-cart"
      >
        <IconShoppingCart iconTitle="shopping-cart-button" />
      </Link>
    );
  }
}

export default ShoppingCartButton;
