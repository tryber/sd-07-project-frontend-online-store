import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src="images/Cart-Icon.svg" alt="Shopping cart sprite" />
        </Link>
      </div>
    );
  }
}

export default CartButton;
