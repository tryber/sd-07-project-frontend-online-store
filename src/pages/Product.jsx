import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import goBackArrow from '../img/back-arrow.png';
import CartButton from './CartButton';
import shoppingCartIcon from '../img/shopping-cart.png';

export default class Product extends Component {
  render() {
    const { productName, productImg, productPrice } = this.props.location.state;
    return (
      <div>
        <div>
          <Link to="/">
            <img src={ goBackArrow } className="go-back-arrow-icon" alt="goBackArrow" />
          </Link>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            <img
              src={ shoppingCartIcon }
              className="shopping-cart-icon"
              alt="shoppingCartImg"
            />
          </Link>
        </div>
        <div>
          <h1 data-testid="product-detail-name">{ productName }</h1>
          <img src={ productImg } alt="productImg" />
          <p>{ productPrice }</p>
          <CartButton
            datatestid="product-detail-add-to-cart"
            productName={ productName }
          />
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  productImg: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
};
