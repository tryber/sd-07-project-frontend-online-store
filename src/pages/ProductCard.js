import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <div data-testid="product">
          <img alt="Products" src={ thumbnail } />
          <div>
            <h4>
              {title}
            </h4>
            <h5>{price}</h5>
          </div>
        </div>
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
