import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar'
import FilteredProductsList from '../components/FilteredProductsList';
import ListCategory from '../components/ListCategory';
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
        <ListCategory />
      </div>
    </div>
    )
  }
}
  
  export default ProductsList;
