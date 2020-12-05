import React from 'react';
import Product from './Product';

class Products extends React.Component {
  render() {
    const { allProducts } = this.props;
    return (
      <div className="products">
        {allProducts === undefined ? (
          <p>loading</p>
        ) : (
          allProducts.map((product) => <Product key={product.title} product={product} />)
        )}
      </div>
    );
  }
}

export default Products;
