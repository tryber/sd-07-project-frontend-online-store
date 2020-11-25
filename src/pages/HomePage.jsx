import React, { Component } from 'react';
import ProductList from '../components/ProductList/ProductList';
import ShoppingCartButton from '../components/ShoppingCartButton/ShoppingCartButton';
import CategoryList from '../components/CategoryList/CategoryList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <ShoppingCartButton />
        <ProductList />
        <CategoryList onChangeCategory={ this.onChangeCategory } />
      </div>
    );
  }
}

export default HomePage;
