import React from 'react';
import { Link } from 'react-router-dom';

function CartButton() {
  return (
    <div>
      <Link data-testid="shopping-cart-button" to="/Cart">
        <button type="button">Cart</button>
      </Link>
    </div>
  );
}

export default CartButton;
