import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CgShoppingCart, CgShoppingBag, CgSearch } from 'react-icons/cg';
import * as api from '../services/api';

import '../styles/home.css';

import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

class Home extends Component {
  constructor() {
    super();

    this.handleSearchKey = this.handleSearchKey.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      searchKey: 'tecnologia',
      category: '',
      results: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
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
    this.setState(
      {
        category,
      },
      () => this.fetchAPI(),
    );
  }

  render() {
    const { results, category, searchKey } = this.state;
    return (
      <div className="div-body">
        <header>
          <div className="div-logo">
            <CgShoppingBag className="icon-mall" />
            <h2 className="h2-title">Mall</h2>
          </div>
          <div className="div-searchkey">
            <input
              data-testid="query-input"
              type="text"
              onChange={ this.handleSearchKey }
              placeholder="O que você procura hoje?"
            />
            <button
              type="submit"
              data-testid="query-button"
              onClick={ this.fetchAPI }
              className="button-search"
            >
              <CgSearch className="icon-search" />
            </button>
          </div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <CgShoppingCart className="icon-cart" />
          </Link>
        </header>
        <section className="main-section">
          <Categories filterCategory={ this.handleCategory } />
          <ProductList
            results={ results }
            category={ category }
            searchKey={ searchKey }
          />
        </section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
