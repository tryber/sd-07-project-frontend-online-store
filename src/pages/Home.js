import React, { Component } from 'react';
import * as api from '../services/api';

import SearchBar from '../components/SearchBar';
import CategoriesList from './CategoriesList';
import ProductList from './ProductList';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      categoryId: '',
      query: '',
    }

    this.getProdutsByQuery = this.getProdutsByQuery.bind(this);
    this.onSearchText = this.onSearchText.bind(this);
  }

  async getProdutsByQuery() {
    const { categoryId, query } = this.state;
    const searchResult = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ products: searchResult.results });
  }

  onSearchText({ target: { name, value } }) {
    this.setState({ [name]: value });
  }
 
  render() {
    return (
      <div className="busca">
        <SearchBar
          query={this.state.query}
          onChange={this.onSearchText}
          onClick={this.getProdutsByQuery}
        />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <CategoriesList />
        <ProductList products={this.state.products} />
      </div>
    );
  }
}
