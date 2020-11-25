import React from 'react';

import { SideBar } from './index';
import './InitialScreen.css';
import Header from './Header';
import ProductList from './ProductList';

import * as api from '../services/api';

class InitialScreen extends React.Component {
  constructor() {
    super();
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.onInputSearchChange = this.onInputSearchChange.bind(this);
    this.buttonSearch = this.buttonSearch.bind(this);
    this.state = {
      searchInput: '',
      categories: [],
      products: [],
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
    };
  }

  async componentDidMount() {
    await this.fetchAPI();
  }

  onInputSearchChange({ target }) {
    this.setState({ searchInput: target.value });
  }

  buttonSearch() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { searchInput } = this.state;
    const dataInputSearch = searchInput;
    const getProducts = await api
      .getProductsFromCategoryAndQuery('query', dataInputSearch);
    this.setState({ products: getProducts.results });
  }

  async fetchAPI() {
    const { getCategories } = api;

    this.setState({
      categories: await getCategories(),
    });
  }

  render() {
    const { message, searchInput, products, categories } = this.state;
    const tagMessage = <h1 data-testid="home-initial-message">{message}</h1>;

    return (
      <>
        <Header
          searchInput={ searchInput }
          onInputSearchChange={ this.onInputSearchChange }
          buttonSearch={ this.buttonSearch }
        />
        {!searchInput ? tagMessage : ''}
        <div className="side-bar">
          <SideBar categories={ categories } />
        </div>
        <ProductList products={ products } />
      </>
    );
  }
}

export default InitialScreen;
