import React from 'react';
import FiltersCategory from './FiltersCategory';
import Header from './Header';
import ProductList from './ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      listProduct: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts() {
    const input = document.getElementById('search-input').value;
    const response = await getProductsFromCategoryAndQuery(input);
    this.setState({ listProduct: response.results });
  }


  render() {
    const { listProduct } = this.state;
    return (
      <div>
        <Header getProducts={ this.getProducts } />
        <div className="container-body">
          <FiltersCategory />
          <div className="container-allProducts">
            <ProductList products={ listProduct } />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
