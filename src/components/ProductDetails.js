import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {

  render() {
    const { location: { state: { productName, productImg, productPrice } } } = this.props;
    return (
      <div>
        <Link to="/" data-testid="shopping-cart-button">
          Voltar
        </Link>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <div>
          <h2 data-testid="product-detail-name">{productName}</h2>
          <h3>{`R$ ${productPrice}`}</h3>
          <img alt="product" src={ productImg } />
        </div>
      </div>
    );
  }
}

export default ProductDetails;

Product.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productName: PropTypes.string.isRequired,
      productImg: PropTypes.string.isRequired,
      productPrice: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
