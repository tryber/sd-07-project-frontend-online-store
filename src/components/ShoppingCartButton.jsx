import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartImage from '../images/shopping-cart.svg';
import './ShoppingCartButton.css';

class ShoppingCartButton extends Component {
  render() {
    const { productsInShoppingCart } = this.props;
    return (
      <nav>
        <Link
          className="button"
          to={ { pathname: '/shoppingCart', productsInShoppingCart } }
          data-testid="shopping-cart-button"
          products-in-shopping-cart={ productsInShoppingCart }
        >
          <img className="image" src={ ShoppingCartImage } alt="Carrinho de Compras" />
        </Link>
      </nav>
    );
  }
}

ShoppingCartButton.propTypes = {
  productsInShoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCartButton;
