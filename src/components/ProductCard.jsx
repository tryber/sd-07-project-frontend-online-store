import React, { Component } from 'react';
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
          </div>
        ))}
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired).isRequired,
};


export default ProductCard;
