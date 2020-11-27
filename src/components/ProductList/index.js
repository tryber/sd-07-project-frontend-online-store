import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="products-content">
        {products.length
          ? products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
            />
          )) : (<p> Nenhum produto foi encontrado </p>)}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProductList;
