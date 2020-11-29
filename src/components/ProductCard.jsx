import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(({ id, title, thumbnail, price }) => (
          <div key={ id } data-testid="product">
            <h2>{title}</h2>
            <img src={ thumbnail } alt="product" />
            <span>{price}</span>
            <Link
              data-testid="product-detail-link"
              to={ { pathname: `/details/${id}` } }
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProductCard;
