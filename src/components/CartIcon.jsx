import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './CartIcon.css';
import Logo from '../shoppingCartImage.png';

class CartIcon extends Component {
  render() {
    const { cartItens } = this.props;
    let quantity = '0';
    quantity = parseInt(quantity, 10);
    if (cartItens !== null) {
      cartItens.forEach((item) => {
        quantity += item.number;
      });
    }
    return (
      <div className="container">
        <img id="cartIcon" src={Logo} alt="cart icon" />
        <span data-testid="shopping-cart-size">{quantity}</span>
      </div>
    );
  }
}

CartIcon.propTypes = {
  cartItens: Proptypes.arrayOf(Proptypes.shape({
    number: Proptypes.number.isRequired,
  })).isRequired,
};

export default CartIcon;
