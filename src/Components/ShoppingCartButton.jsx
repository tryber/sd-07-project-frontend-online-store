import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCartButton.css';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        <img
          className="shopping-cart-icon"
          src="https://www.flaticon.com/svg/static/icons/svg/1170/1170678.svg"
          alt="imagem com um carrinho de compras"
        />
      </Link>
    );
  }
}

export default ShoppingCartButton;
