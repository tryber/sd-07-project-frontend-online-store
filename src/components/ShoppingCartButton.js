import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div>
        <button type="button">
          <Link
            to="/shoppingCartPage"
            data-testid="shopping-cart-button"
          >
            Carrinho de compras
          </Link>
        </button>
      </div>
    );
  }
}

export default ShoppingCartButton;
