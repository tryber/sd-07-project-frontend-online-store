import React from 'react';
import cartIcon from './img/cartIcon.png';

class CartIcon extends React.Component {
  render() {
    return (
      <div>
        <img
          src={ cartIcon }
          alt="shopping cart"
          className="cart-icon"
        />
      </div>
    );
  }
}

export default CartIcon;
