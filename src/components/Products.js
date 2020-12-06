import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

class Products extends React.Component {
  render() {
    const { products, updateCartAmount } = this.props;
    return (
      <div className="products">
        {products === undefined ? (
          <p>loading</p>
        ) : (
          products.map((product) => (
            <Product
              key={ product.title }
              product={ product }
              updateCartAmount={ updateCartAmount }
            />
          ))
        )}
      </div>
    );
  }
}

export default Products;

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCartAmount: PropTypes.func.isRequired,
};
