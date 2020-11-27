import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { prod: { id, title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <p>{ price }</p>
        <Link data-testid="product-detail-link" to={ `/productDetails/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  prod: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
