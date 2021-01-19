import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../App.css';
import Cart from './cart';

class Cartfull extends React.Component {
  makeListProductsCart(arrayProducts) {
    return arrayProducts.map(({ id, title, quantity, price, thumbnail }) => (
      <div key={ id }>
        <img src={ thumbnail } alt="Produtos" />
        <span data-testid="shopping-cart-product-name">{ title }</span>
        <br />
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        <br />
        <span>{ price }</span>
        <br />
        <br />
      </div>
    ));
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    return (

      <div>
        <Link to="/">
          <button type="button">
            Home
          </button>
        </Link>
        {
          state.length ? this.makeListProductsCart(state) : <Cart />
        }
      </div>
    );
  }
}

Cartfull.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.array,
  }).isRequired,
};

export default Cartfull;
