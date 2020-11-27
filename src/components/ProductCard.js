import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
              <img src={ thumbnail } alt="products" />
              <p>{ price }</p>
            </div>
          );
        })}
      </div>
    );
  }
}

ProductCard.propTypes = {
  match: PropTypes.shape({
    id:PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default ProductCard;
