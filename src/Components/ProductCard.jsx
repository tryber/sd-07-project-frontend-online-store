import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <Link
        to={ {
          pathname: '/product',
          state: { product },
        } }
        data-testid="product-detail-link"
      >
        <div>
          <h1>{ title }</h1>
          <div>{ price }</div>
          <img src={ thumbnail } alt="exemplar do produto" />
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.array }.isRequired;

export default ProductCard;
