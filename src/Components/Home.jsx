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
      selectCategory: false,
    };
    this.getProducts = this.getProducts.bind(this);
    this.getProductsFromCategory = this.getProductsFromCategory.bind(this);
  }

  async getProducts() {
    const { selectCategory } = this.state;
    let response;
    const input = document.getElementById('search-input').value;
    if (selectCategory === false) {
      response = await getProductsFromCategoryAndQuery(input);
    } else {
      response = await getProductsFromCategoryAndQuery(input, selectCategory);
    }
    this.setState({ listProduct: response.results });
  }

  getProductsFromCategory(event) {
    const category = event.target.id;
    this.setState({ selectCategory: category });
  }

  render() {
    const { listProduct } = this.state;
    return (
      <div>
        <Header getProducts={ this.getProducts } />
        <div className="container-body">
          <FiltersCategory getCategory={ this.getProductsFromCategory } />
          <div className="container-allProducts">
            <ProductList products={ listProduct } />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
