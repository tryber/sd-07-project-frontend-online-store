import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

class GoToShoppingCart extends Component {
  render() {
    return (
      <div>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          <button className="bt-but" type="button">
            <CartIcon />
          </button>
        </Link>
      </div>
    );
  }
}

export default GoToShoppingCart;
