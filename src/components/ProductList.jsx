import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, getKartItens } = this.props;
    return (
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            getKartItens={ getKartItens }
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  getKartItens: PropTypes.func.isRequired,
};
export default ProductList;
