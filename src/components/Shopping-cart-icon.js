import React from 'react';
import { Link } from 'react-router-dom';
import cart from './img/shopping.png';


class ShoppingCartIcon extends React.Component {
  render() {
    return (
      <Link to="/shoppingcart" data-testid="shopping-cart-button">
        <img className="shopping" src={ cart } alt="Shopping Cart" />
      </Link>
    );
  }
}

export default ShoppingCartIcon;
