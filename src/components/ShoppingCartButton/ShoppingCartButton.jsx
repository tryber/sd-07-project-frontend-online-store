import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends Component {
  render() {
    return <Link to="/shoppingcart" data-testid="shopping-cart-button">Shopping cart</Link>;
  }
}

export default ShoppingCartButton;
