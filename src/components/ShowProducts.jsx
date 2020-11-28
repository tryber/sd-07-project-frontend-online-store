import React, { Component } from 'react';
import Proptypes from 'prop-types';
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

ShowProducts.Proptypes = {
  products: Proptypes.shape({
    key: Proptypes.number.isRequired,
    id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
    thumbnail: Proptypes.string.isRequired,
  }).isRequired,
  actualizeCart: Proptypes.func.isRequired,
};

export default ShowProducts;
