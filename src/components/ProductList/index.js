import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

class ProductList extends Component {
  render() {
    const { products, quantityChange } = this.props;
    return (
      <div className="products-content">
        {products.length
          ? products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
              quantityChange={ quantityChange }
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
  quantityChange: PropTypes.func.isRequired,
};

export default ProductList;
