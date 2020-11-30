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
      searchBar: false,
    };
    this.getProducts = this.getProducts.bind(this);
    this.getProductsFromCategory = this.getProductsFromCategory.bind(this);
    this.getSerchText = this.getSerchText.bind(this);
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

  // Bug aguardar o state ser alterado para só assim continuar.
  async getProductsFromCategory(event) {
    const category = event.target.id;
    this.setState({ selectCategory: category });
    const { searchBar } = this.state;
    console.log(category);
    const response = await getProductsFromCategoryAndQuery(searchBar, category);
    this.setState({ listProduct: response.results });
  }

  getSerchText(event) {
    this.setState({ searchBar: event.target.value });
  }

  render() {
    const { listProduct } = this.state;
    return (
      <div>
        <Header getProducts={ this.getProducts } searchBar={ this.getSerchText } />
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
