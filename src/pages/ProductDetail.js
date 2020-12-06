import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Reviews from '../components/Reviews';
import Specifications from '../components/Specifications';
import * as cartAPI from '../services/cartAPI';

class ProductDetail extends Component {
  constructor(props) {
    super();
    this.addItemToCartAndUpdate = this.addItemToCartAndUpdate.bind(this);
    this.state = {
      product: props.location.state.product,
    };
  }

  addItemToCartAndUpdate() {
    const { product } = this.state;
    const { updateCartAmount } = this.props;
    cartAPI.addItem(product);
    updateCartAmount();
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">
          {product.title}
          - R$
          {product.price}
        </h3>
        <div>
          <img alt={ product.title } src={ product.thumbnail } />
        </div>
        <Specifications product={ product } />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addItemToCartAndUpdate }
        >
          Me adicione ao carrinho :)
        </button>
        <Reviews />
      </div>
    );
  }
}

export default ProductDetail;

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.object,
    }).isRequired,
  }).isRequired,
  updateCartAmount: PropTypes.func.isRequired,
};
