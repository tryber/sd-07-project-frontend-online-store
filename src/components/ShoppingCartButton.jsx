import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartImage from '../images/shopping-cart.svg';
import './ShoppingCartButton.css';

class ShoppingCartButton extends Component {
  render() {
    return (
      <nav>
        <Link className="button" to="/shoppingCart" data-testid="shopping-cart-button">
          <img className="image" src={ ShoppingCartImage } alt="Carrinho de Compras" />
        </Link>
      </nav>
    );
  }
}

export default ShoppingCartButton;
