import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCartItems from './ProductCartItems';

class ProductCartList extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-quantity">
          { `Quantidade de itens: ${cartItems.length}` }
        </p>
        { cartItems.map((item) => <ProductCartItems key={ item.id } item={ item } />) }
      </div>
    );
  }
}

ProductCartList.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCartList;
