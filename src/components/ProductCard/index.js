import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';
import * as lsapi from '../../services/lsapi';

class ProductCard extends Component {
  selectProduct(product) {
    console.log('set', product);
    lsapi.setSelectedProduct(product);
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
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
          <p>{ price }</p>
          <Link
            data-testid="product-detail-link"
            to="/productdetail"
            onClick={ () => this.selectProduct(product) }
          >
            Mais Detalhes
          </Link>
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
  }).isRequired,
};

export default ProductCard;
