import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="product-display">
        {products.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        ))}
      </div>
    );
  }
}
ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
