import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ShoppingCartButton from '../components/ShoppingCartButton';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ShoppingCartButton />
      </div>
    );
  }
}

export default Home;
