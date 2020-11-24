import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import CategoryList from '../../components/categoryList/CategoryList';

class ProductList extends Component {
  render() {
    return (
      <div>
        <input type='text'></input>
        <h4 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h4>
        <div>
          <CategoryList />
        </div>
      </div>
    );
  }
}

export default ProductList;
