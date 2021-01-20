import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../images/cart.png';

class ButtonCart extends Component {
  render() {
    return (
      <div>
        <br />
        <Link
          to={ {
            pathname: '/pages/cartfull',
          } }
          data-testid="shopping-cart-button"
        >
          <img
            className="btImg"
            src={ cart }
            alt="Carrinho de Compras"
          />
        </Link>
      </div>
    );
  }
}

export default ButtonCart;
