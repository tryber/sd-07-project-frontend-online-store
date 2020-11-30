import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ShoppingCartButton.css';
import shoppingCartLogo from './shopping-cart.png';

class ShoppingCartButton extends Component {
  render() {
    const { visibility } = this.props;
    return (
      <Link
        to="/shoppingcart"
        data-testid="shopping-cart-button"
        className={ visibility ? 'shopping-cart-button' : 'shopping-cart-button hidden' }
      >
        <img
          className="shopping-cart-button"
          src={ shoppingCartLogo }
          alt="icon shopping cart"
        />
      </Link>
    );
  }
}

ShoppingCartButton.propTypes = {
  visibility: PropTypes.bool,
};

ShoppingCartButton.defaultProps = {
  visibility: true,
};

export default ShoppingCartButton;
