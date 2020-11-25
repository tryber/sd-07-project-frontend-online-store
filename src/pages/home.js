import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

class Home extends Component {
  constructor() {
    super();

    this.handleSearchKey = this.handleSearchKey.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      searchKey: '',
      results: [],
    };
  }

  handleSearchKey({ target }) {
    console.log(target.value);
    this.setState({
      searchKey: target.value,
    });
  }

  async fetchAPI() {
    const { searchKey } = this.state;
    const request = await api.getProductsFromCategoryAndQuery('', searchKey);
    console.log(request.results);
    this.setState({
      results: request.results,
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <header>
          <input data-testid="query-input" type="text" onChange={this.handleSearchKey} />
          <button type="submit" data-testid="query-button" onClick={this.fetchAPI}>
            Search
          </button>
          <Link to="/cart" data-testid="shopping-cart-button">
            Carrinho de compras
          </Link>
        </header>
        <ProductList results={results} />
        <Categories />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
