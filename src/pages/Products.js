import React from 'react';

import ProductsList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';

class Products extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductsList />
      </div>
    );
  }
}

export default Products;
