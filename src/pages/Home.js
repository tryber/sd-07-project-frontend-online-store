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
    };

    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.getProdutsByQuery = this.getProdutsByQuery.bind(this);
    this.onSearchText = this.onSearchText.bind(this);
  }

  onSearchText({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async getProdutsByQuery() {
    const { categoryId, query } = this.state;
    const searchResult = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ products: searchResult.results });
  }

  async handleRadioClick({ target: { name, id } }) {
    await this.setState({ [name]: id });
    this.getProdutsByQuery();
  }

  render() {
    const { query, products } = this.state;
    return (
      <div className="busca">
        <SearchBar
          query={ query }
          onChange={ this.onSearchText }
          onClick={ this.getProdutsByQuery }
        />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList onClick={ this.handleRadioClick } />
        <ProductList products={ products } />
      </div>
    );
  }
}
