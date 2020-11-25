import React, { Component } from 'react';
import ProductList from '../components/ProductList/ProductList';
import CategoryList from '../components/CategoryList/CategoryList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <ProductList />
        <CategoryList onChangeCategory={this.onChangeCategory } />
      </div>
    )
  }
}

export default HomePage;
