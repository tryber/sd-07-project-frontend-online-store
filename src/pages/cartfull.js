import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';
import Cart from './cart';

class Cartfull extends React.Component {
  constructor() {
    super();
    this.makeListProductsCart = this.makeListProductsCart.bind(this);
    this.disabledButtonTrue = this.disabledButtonTrue.bind(this);
  }

  makeListProductsCart(arrayProducts, updateQuantity, removeProduct) {
    const valueNegative = -1;
    const valuePositive = 1;
    return arrayProducts.map(({
      id, title, quantity, price, thumbnail, availableQuantity,
    }) => (
      <div key={ id }>
        <img src={ thumbnail } alt="Produtos" />
        <span data-testid="shopping-cart-product-name">{ title }</span>
        <br />
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        <br />
        <span>{ price }</span>
        <div>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => updateQuantity(id, valueNegative) }
          >
            -
          </button>

          {quantity < availableQuantity
            ? this.disabledButtonFalse(
              false, updateQuantity, id, valuePositive,
            ) : this.disabledButtonTrue(true)}

          <button
            type="button"
            onClick={ () => removeProduct(id) }
          >
            X
          </button>
        </div>
        <br />
        <br />
      </div>
    ));
  }

  disabledButtonTrue(bool) {
    return (
      <button
        data-testid="product-increase-quantity"
        type="button"
        disabled={ bool }
      >
        +
      </button>
    );
  }

  disabledButtonFalse(bool, updateQuantity, id, valuePositive) {
    return (
      <button
        data-testid="product-increase-quantity"
        type="button"
        disabled={ bool }
        onClick={ () => updateQuantity(id, valuePositive) }
      >
        +
      </button>
    );
  }

  render() {
    const { productsCart, updateQuantity, removeProduct } = this.props;
    return (
      <div>
        <Link to="/">
          <button type="button">
            Home
          </button>
        </Link>

        {
          productsCart.length
            ? this.makeListProductsCart(
              productsCart, updateQuantity, removeProduct,
            )
            : <Cart />
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
  updateQuantity: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,

};

export default Cartfull;
