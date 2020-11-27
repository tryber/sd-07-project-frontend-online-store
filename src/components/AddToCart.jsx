import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../pages/ShoppingCart';

class AddToCart extends React.Component {
  render () {
    const { product } = this.props;
    return (
      <div>
        <link to {{ pathName: `/shopping-cart`, state: product }}>
          <button data-testid="product-add-to-cart">Adicionar ao carrinho de compras</button>
        </link>
      </div>
    );
  }
}

export default AddToCart;

