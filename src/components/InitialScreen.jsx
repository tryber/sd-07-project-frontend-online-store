import React from 'react';

import { SideBar } from './index';
import Header from './Header';
import ProductList from './ProductList';

import * as api from '../services/api';
import * as storageServices from '../services/storageServices';

class InitialScreen extends React.Component {
  constructor() {
    super();
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.onInputSearchChange = this.onInputSearchChange.bind(this);
    this.buttonSearch = this.buttonSearch.bind(this);
    this.onChangeCategorySelected = this.onChangeCategorySelected.bind(this);
    this.getKartItens = this.getKartItens.bind(this);
    this.state = {
      searchInput: '',
      categories: [],
      products: [],
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      categorySelected: '',
      qttItemsKart: storageServices.getStorageKartItens(),
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  onInputSearchChange({ target }) {
    this.setState({ searchInput: target.value });
  }

  onChangeCategorySelected({ target }) {
    this.setState({ categorySelected: target.id }, () => {
      this.fetchProducts();
    });
  }

  async getKartItens() {
    const qttItemsKart = await storageServices.getStorageKartItens();
    await this.setState({ qttItemsKart });
  }

  buttonSearch() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { searchInput, categorySelected } = this.state;
    const dataInputSearch = searchInput;

    const datacategorySelected = categorySelected;
    const getProducts = await api.getProductsFromCategoryAndQuery(
      datacategorySelected,
      dataInputSearch,
    );
    this.setState({ products: getProducts.results });
  }

  async fetchAPI() {
    const { getCategories } = api;

    this.setState({
      categories: await getCategories(),
    });
  }

  render() {
    const { message, searchInput, products, categories, qttItemsKart } = this.state;
    const tagMessage = <h1 data-testid="home-initial-message">{message}</h1>;

    return (
      <div className="initial-screen">
        <Header
          searchInput={ searchInput }
          onInputSearchChange={ this.onInputSearchChange }
          buttonSearch={ this.buttonSearch }
          qttItemsKart={ qttItemsKart }
        />
        <div className="search-text">{!searchInput ? tagMessage : ''}</div>
        <div className="initial-screen-body">
          <div className="side-bar">
            <SideBar
              categories={ categories }
              onChangeCategorySelected={ this.onChangeCategorySelected }
            />
          </div>
          <ProductList products={ products } getKartItens={ this.getKartItens } />
        </div>
      </div>
    );
  }
}

export default InitialScreen;
