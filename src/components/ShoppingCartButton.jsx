import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartImage from '../images/shopping-cart.svg';
import './ShoppingCartButton.css';

class ShoppingCartButton extends Component {
  constructor() {
    super();
    this.sumQuantity = this.sumQuantity.bind(this);
    this.state = {
      circleClass: 'quantity',
    }
  }

  sumQuantity(array) {
    const quantity = array.reduce((acc, item) => acc + item.quantity, 0);
    return quantity;
  }

  render() {
    const { productsInShoppingCart } = this.props;
    const { circleClass } = this.state;
    const quantity = this.sumQuantity(productsInShoppingCart)
    return (
      // <nav>
        <Link
          className="button"
          to={ { pathname: '/shoppingCart', productsInShoppingCart } }
          data-testid="shopping-cart-button"
          products-in-shopping-cart={ productsInShoppingCart }
        >
          <div className={ `${circleClass}` }>
            <span data-testid="shopping-cart-size">{quantity}</span>
          </div>
          <img className="image" src={ ShoppingCartImage } alt="Carrinho de Compras" />
        </Link>
      // </nav>
    );
  }
}

ShoppingCartButton.propTypes = {
  productsInShoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCartButton;
