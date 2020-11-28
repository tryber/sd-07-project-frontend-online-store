import React, { Component } from 'react';
import Product from './Product';

class ShowProducts extends Component {
  render() {
    const { products, actualizeCart } = this.props;

    return (
      <div>
        {products.map((product) => (<Product
          key={ product.id }
          id={ product.id }
          title={ product.title }
          price={ product.price }
          thumbnail={ product.thumbnail }
          actualizeCart={ actualizeCart }
        />))}
      </div>
    );
  }
}

export default ShowProducts;
