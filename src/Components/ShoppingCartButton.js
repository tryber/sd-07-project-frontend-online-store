import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends Component {
  render() {
    return (
      <div className="cart-icon">
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        />
      </div>
    );
  }
}

export default ShoppingCartButton;
