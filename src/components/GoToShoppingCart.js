import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GoToShoppingCart extends Component {
  render() {
    return (
      <div>
        <Link to="/shoppingCart">
          <button type="button" data-testid="shopping-cart-button">
            Carrinho de compras
          </button>
        </Link>
      </div>
    );
  }
}

export default GoToShoppingCart;
