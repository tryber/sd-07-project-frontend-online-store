import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, addToShoppingCart } = this.props;
    return (
      <div>
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            addToShoppingCart={ addToShoppingCart }
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf().isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
};

export default ProductList;
