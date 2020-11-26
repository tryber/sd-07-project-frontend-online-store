import React, { Component } from 'react';
import ProductList from '../components/ProductList/ProductList';
import ShoppingCartButton from '../components/ShoppingCartButton/ShoppingCartButton';
import CategoryList from '../components/CategoryList/CategoryList';

class HomePage extends Component {
// constructor(props) {
  //   super(props);
  //   this.setState = {
  //     category: 'xablau',
  //   };
  // }
  
  render() {
    return (
      // const { category } = this.state;
      <div>
        <ShoppingCartButton />
        <ProductList categoryId="MLB5672" />
        <CategoryList onChangeCategory={ this.onChangeCategory } />
      </div>
    );
  }
}

export default HomePage;
