import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import FilteredProductsList from '../components/FilteredProductsList';

class ProductsList extends Component {
  constructor() {
    super();
    // this.state = {
    //   productsToRender: [];
    // }
  }

  render() {
    return (        
      <div>
        <SearchBar />
        <FilteredProductsList />
      </div>        
    );
  }
}

  export default ProductsList;
