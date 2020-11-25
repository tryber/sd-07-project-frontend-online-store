
import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ShoppingCartButton from '../components/ShoppingCartButton'
    
export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Home</h1>
          <SearchBar />
          <ShoppingCartButton />
        </header>
      </div>
    );
  }
}
