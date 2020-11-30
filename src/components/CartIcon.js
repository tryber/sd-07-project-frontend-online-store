import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CartIcon extends Component {
  render() {
    const { totalQuantity } = this.props;
    return (
      <Link
        to="/shoopingcart"
        data-testid="shopping-cart-button"
        className="home-initial-link"
      >
        <img
          src="images/shopping-cart-50.png"
          alt="Carrinho de Compras"
        />
        <span data-testid="shopping-cart-size">{totalQuantity}</span>
      </Link>
    );
  }
}

CartIcon.propTypes = {
  totalQuantity: PropTypes.string.isRequired,
};

export default CartIcon;
