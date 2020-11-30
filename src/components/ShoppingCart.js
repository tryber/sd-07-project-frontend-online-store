import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCartList from './ProductCartList';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Seu carrinho está vazio',
    };
  }

  render() {
    const { cartItems } = this.props;
    const { message } = this.state;

    if (cartItems.length < 1) {
      return <h1 data-testid="shopping-cart-empty-message">{ message }</h1>;
    }
    return (
      <div>
        <ProductCartList cartItems={ cartItems } />
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
