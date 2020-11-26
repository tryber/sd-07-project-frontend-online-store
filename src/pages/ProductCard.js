import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div>
        <Link data-testid="product-detail-link" to={`/product/${id}`}>
          <div data-testid="product" className="product">
            <img alt="Products" src={thumbnail} />
            <div>
              <h4>
                {title}
              </h4>
              <h5>{price}</h5>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
