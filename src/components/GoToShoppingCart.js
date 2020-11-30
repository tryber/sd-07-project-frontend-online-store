import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../components/CartIcon';

class GoToShoppingCart extends Component {
  render() {
    return (
      <div>
        <Link to="/shoppingCart">
          <button className="bt-but" type="button" data-testid="shopping-cart-button">
            <CartIcon />
          </button>
        </Link>
      </div>
    );
  }
}

export default GoToShoppingCart;
