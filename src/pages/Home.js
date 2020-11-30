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

    this.getProdutsByQuery = this.getProdutsByQuery.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
  }

  handleRadioClick({ target: { name, id } }) {
    this.setState({ [name]: id }, () => {
      this.getProdutsByQuery();
    });
  }

  async getProdutsByQuery() {
    const { categoryId, query } = this.state;
    const searchResult = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ products: searchResult.results });
  }

  render() {
    const { products, query } = this.state;
    return (
      <div className="busca">
        <SearchBar
          query={ query }
          onChange={ ({ target: { name, value } }) => this.setState({ [name]: value }) }
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
