import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cart from '../images/cart.png';

class ButtonCart extends Component {
  sumQuantityProducts(products) {
    const sumInitial = 0;
    if (products.length === sumInitial) return sumInitial;
    const sumQuantity = products
      .reduce((total, item) => total + item.quantity, sumInitial);
    return sumQuantity;
  }

  render() {
    const { productsCart } = this.props;
    const quantityProducts = this.sumQuantityProducts(productsCart);
    return (
      <div>
        <br />
        <Link
          to={ {
            pathname: '/pages/cartfull',
          } }
          data-testid="shopping-cart-button"
        >
          <span data-testid="shopping-cart-size">{quantityProducts}</span>
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
  productsCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ButtonCart;
