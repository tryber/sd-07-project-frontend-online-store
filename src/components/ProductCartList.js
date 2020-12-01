import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCartItems from './ProductCartItems';

class ProductCartList extends Component {
  render() {
    const { cartItems, addCart, removeItemCart, removeCart } = this.props;

    return (
      <div>
        { cartItems.map((item) => (
          <ProductCartItems
            key={ item.id }
            item={ item }
            addCart={ addCart }
            removeItemCart={ removeItemCart }
            removeCart={ removeCart }
          />))}
      </div>
    );
  }
}

ProductCartList.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCart: PropTypes.func.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
};

export default ProductCartList;
