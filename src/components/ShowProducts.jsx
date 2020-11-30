import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Product from './Product';
import './ShowProducts.css'

class ShowProducts extends Component {
  render() {
    const { products, actualizeCart } = this.props;

    return (
      <div className="container">
        {products.map((product) => (<Product
          key={ product.id }
          id={ product.id }
          title={ product.title }
          price={ product.price }
          thumbnail={ product.thumbnail }
          freeShipping={ product.shipping.free_shipping }
          availableQuantity={ product.available_quantity }
          actualizeCart={ actualizeCart }
        />))}
      </div>
    );
  }
}

ShowProducts.propTypes = {
  products: Proptypes.arrayOf(
    Proptypes.shape({
      key: Proptypes.string.isRequired,
      id: Proptypes.string.isRequired,
      title: Proptypes.string.isRequired,
      price: Proptypes.number.isRequired,
      thumbnail: Proptypes.string.isRequired,
      freeShipping: Proptypes.bool.isRequired,
      availableQuantity: Proptypes.number.isRequired,
    }),
  ).isRequired,
  actualizeCart: Proptypes.func.isRequired,
};

export default ShowProducts;
