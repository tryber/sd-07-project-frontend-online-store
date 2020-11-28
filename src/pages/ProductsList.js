import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import FilteredProductsList from '../components/FilteredProductsList';

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productsToRender: []
    }
  }

  render() {
    return (
    <div>
      <div>
        <SearchBar />
        <FilteredProductsList />
      </div>
    </div>
    )
  }
}
  
  export default ProductsList;
