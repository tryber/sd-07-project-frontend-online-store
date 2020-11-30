import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => {
          const { id, title, thumbnail, price } = product;
          return (
            <div
              key={ id }
              data-testid="product"
            >
              <h2>{ title }</h2>
              <Link
                to={ {
                  pathname: `./pages/productpage/${id}`,
                  state: product,
                } }
              >
                <img src={ thumbnail } alt="products" data-testid="product-detail-link" />
              </Link>
              <p>{ price }</p>
            </div>
          );
        })}
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductCard;
