import React from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCartButton extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/pages/shoppingcart">
        <img  className="shopping-cart-icon"
        src="https://image.flaticon.com/icons/png/512/34/34562.png" alt="icone-carrinho" />
      </Link>
    );
  }
}
