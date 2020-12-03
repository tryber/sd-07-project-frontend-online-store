import React, { Component } from 'react';
import * as api from '../services/api';
import * as cartApi from '../services/localStorage';

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
      cartSize: cartApi.showQuantInCart(),
    };

    this.getProdutsByQuery = this.getProdutsByQuery.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.updateCartSize = this.updateCartSize.bind(this);
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

  updateCartSize() {
    this.setState({ cartSize: cartApi.showQuantInCart() });
  }

  render() {
    const { products, query, cartSize } = this.state;
    return (
      <div className="busca">
        <SearchBar
          query={ query }
          onChange={ ({ target: { name, value } }) => this.setState({ [name]: value }) }
          onClick={ this.getProdutsByQuery }
          cartSize={ cartSize }
        />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList onClick={ this.handleRadioClick } />
        <ProductList products={ products } updateCartSize={ this.updateCartSize } />
      </div>
    );
  }
}
