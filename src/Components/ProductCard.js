import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <div>
          <Link to={ `/product-details/${product.category_id}/${product.id}` }>
            <h4 data-testid="product-detail-link">{ product.title }</h4>
          </Link>
        </div>
        <img src={ product.thumbnail } alt={ product.id } />
        <p>
          R$
          {product.price}
        </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    category_id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
