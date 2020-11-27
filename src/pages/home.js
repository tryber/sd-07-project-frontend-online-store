import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

class Home extends Component {
  constructor() {
    super();

    this.handleSearchKey = this.handleSearchKey.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      searchKey: '',
      category: '',
      results: [],

    };
  }


  handleSearchKey({ target }) {
    this.setState({
      searchKey: target.value,
    });
  }

  async fetchAPI() {
    const { searchKey, category } = this.state;
    const request = await api.getProductsFromCategoryAndQuery(category, searchKey);

    this.setState({
      results: request.results,
    });
  }

  async handleCategory(category) {
    this.setState({
      category,
    }, () => this.fetchAPI());
  }

  render() {
    const { results, category, searchKey } = this.state;
    return (
      <div>
        <header>
          <input
            data-testid="query-input"
            type="text"
            onChange={ this.handleSearchKey }
          />
          <button type="submit" data-testid="query-button" onClick={ this.fetchAPI }>
            Search
          </button>
          <Link to="/cart" data-testid="shopping-cart-button">
            Carrinho de compras
          </Link>
        </header>
        <ProductList results={ results } category={ category } searchKey={ searchKey } />
        <Categories filterCategory={ this.handleCategory } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
