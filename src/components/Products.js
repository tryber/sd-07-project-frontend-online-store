import React from 'react';
import Product from './Product';

class Products extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="products">
        {products === undefined ? (
          <p>loading</p>
        ) : (
          products.map((product) => <Product key={product.title} product={product} />)
        )}
      </div>
    );
  }
}

export default Products;
