import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductList from '../components/ProductList/ProductList';

class HomePage extends Component {
    render() {
      return (
        <div>
          <SearchBar />
          <ProductList />
        </div>
      )
    }
  }
  
  export default HomePage;
  