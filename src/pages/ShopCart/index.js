/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as viewProds from '../../views/products';
import * as css from './style';
import * as cpIcons from '../../components/Icons';

class ShopCart extends Component {
  constructor() {
    super();

    this.state = {
      productsInCart: [],
    };
  }

  componentDidMount() {
    this.getProductsFromLocation();
  }

  getProductsFromLocation() {
    const { location } = this.props;
    const { productItens } = location;
    this.setState({ productsInCart: productItens });
  }

  render() {
    const { productsInCart } = this.state;
    return (
      <css.Ctn>
        <div className="icon-ctn">
          <Link data-testid="shopping-cart-button" to="/">
            <cpIcons.Back />
          </Link>
          <cpIcons.Cart color="gray" />
        </div>
        <div className="ctn-item-display">
          {productsInCart.map((product) => (
            <viewProds.ItemProduct key={ product.id } product={ product } />
          ))}
        </div>

        <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
      </css.Ctn>
    );
  }
}

ShopCart.propTypes = {
  location: PropTypes.shape({
    productItens: PropTypes.object,
  }).isRequired,
};

export default ShopCart;
