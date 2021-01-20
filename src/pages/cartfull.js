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
    const { productsCart } = this.props;
    return (
      <div>
        <Link to="/">
          <button type="button">
            Home
          </button>
        </Link>

        {
          productsCart.length ? this.makeListProductsCart(productsCart) : <Cart />
        }
        {
          productsCart.length ? (
            <Link
              data-testid="checkout-products"
              to={ {
                pathname: '/pages/checkout',
                productsCart,
              } }
            >
              Finalizar compra
            </Link>
          ) : false
        }

      </div>
    );
  }
}

Cartfull.propTypes = {
  productsCart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  })).isRequired,

};

export default Cartfull;
