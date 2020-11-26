import React from 'react';

import ProductsList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';
import * as api from '../services/api';

class Products extends React.Component {
  constructor() {
    super();

    this.showProducts = this.showProducts.bind(this);
    this.state = {
      products: [],
    };
  }

  async showProducts(querySearch) {
    const response = await api.getProductsFromCategoryAndQuery('', querySearch);
    const productsResponse = response.results;
    this.setState({
      products: productsResponse,
    });
  }


  render() {
    const { products } = this.state;
    return (
      <div>
        <SearchBar getQuerySearch={ this.showProducts } />
        <ProductsList products={ products } />
      </div>
    );
  }
}

export default Products;
