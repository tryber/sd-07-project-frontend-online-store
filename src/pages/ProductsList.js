import React, { Component } from 'react';
import * as api from '../services/api';
import SearchBar from '../components/SearchBar';
import FilteredProductsList from '../components/FilteredProductsList';

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productsToRender: [],
      inputSearchValue: '',
    };
    this.fetchByQuery = this.fetchByQuery.bind(this);
    this.updateInputSearch = this.updateInputSearch.bind(this);
  }

  async fetchByQuery() {
    const { inputSearchValue } = this.state;
    const fetchResult = await api.getProductsFromCategoryAndQuery(false , inputSearchValue);
    this.setState({
      productsToRender: [fetchResult.results],
    });
  }

  updateInputSearch(event) {
    const { target } = event;
    this.setState({
      inputSearchValue: target.value,
    });
  }

  render() {
    const { productsToRender, inputSearchValue } = this.state;
    return (
      <div>
        <SearchBar onSearch={ this.fetchByQuery } inputValue={ inputSearchValue } inputChange={ this.updateInputSearch } />
        <FilteredProductsList allProducts={ productsToRender } />
      </div>
    );
  }
}

export default ProductsList;
