import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductList from '../components/ProductList/ProductList';
import ShoppingCartButton from  '../components/ShoppingCartButton/ShoppingCartButton'

class HomePage extends Component {
    render() {
      return (
        <div>
          <SearchBar />
          <ShoppingCartButton/>
          <ProductList />
        </div>
      )
    }
  }
  
  export default HomePage;
  