import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import cart from '../images/cart.png';

class ButtonCart extends Component {
  render() {
    const { productsCart } = this.props;
    return (
      <div>
        <br />
        <Link
          to={ {
            pathname: '/pages/cartfull',
            state: productsCart,
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

ButtonCart.propTypes = {
  productsCart: PropTypes.arrayOf.isRequired,
};

export default ButtonCart;
