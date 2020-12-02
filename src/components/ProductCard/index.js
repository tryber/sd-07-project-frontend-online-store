import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';
import * as lsapi from '../../services/lsapi';

class ProductCard extends Component {
  selectProduct(product) {
    lsapi.setSelectedProduct(product);
  }

  addToCart(product) {
    const DEFAULT_QUANTITY_PER_CLICK = 1;
    lsapi.addToShoppingCartList(product, DEFAULT_QUANTITY_PER_CLICK);
  }

  render() {
    const { product, quantityChange } = this.props;
    const {
      title,
      thumbnail,
      price,
      shipping: { free_shipping: isFreeShipping } } = product;
    return (
      <div
        className="product-card"
        data-testid="product"
      >
        <img
          className="product-card-image"
          src={ thumbnail }
          alt="Product"
        />
        <div
          className="product-card-info"
        >
          <h3
            data-testid="product-detail-name"
            className="product-card-title"
          >
            { title }
          </h3>
          { isFreeShipping && <span data-testid="free-shipping">Frete Grátis</span> }
          <p>{ price }</p>
          <Link
            data-testid="product-detail-link"
            to="/productdetail"
            onClick={ () => this.selectProduct(product) }
          >
            Mais Detalhes
          </Link>
        </div>
        <div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => { this.addToCart(product); quantityChange(); } }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  quantityChange: PropTypes.func.isRequired,
};

export default ProductCard;
