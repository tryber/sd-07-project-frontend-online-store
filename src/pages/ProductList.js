import React, { Component } from 'react';
import CartButton from '../components/CartButton';

class ProductList extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <CartButton />
      </div>
    );
  }
}

export default ProductList;
