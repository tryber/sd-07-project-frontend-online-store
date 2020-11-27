import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;

    return (
      <div className="product-card" data-testid="product" key={ id }>
        <img alt="product Cover" className="product-card-image" src={ thumbnail } />
        <div className="product-card-body">
          <h4
            data-testid="product-card-title"
            className="product-card-title"
          >
            { title }
          </h4>
          <h5 className="product-card-storyline">{ price }</h5>
          <Link
            data-testid="product-detail-link"
            to={ `/productDetail/${id}` }
          >
            Detalhes
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
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
