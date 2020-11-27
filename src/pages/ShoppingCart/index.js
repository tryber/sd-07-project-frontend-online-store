import React, { Component } from 'react';
import { ShoppingCartList } from '../../components';
import * as lsapi from '../../services/lsapi';

class ShoppingCart extends Component {
  render() {
    const purchasedProducts = lsapi.getShoppingCartList();
    return (
      <div className="cart-list-container">
        <ShoppingCartList
          purchasedProducts={ purchasedProducts }
        />
      </div>
    );
  }
}

export default ShoppingCart;
