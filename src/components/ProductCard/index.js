import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { product: { title, thumbnail, price } } = this.props;
    const { purchasedProducts } = this.props;
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
          >
            Mais Detalhes
          </Link>
        </div>
        <div>
          <button
            type="submit"
            data-testid="product-add-to-cart"
            onClick={ () => purchasedProducts(product) }
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
  }).isRequired,
  purchasedProducts: PropTypes.func.isRequired,
};

export default ProductCard;
