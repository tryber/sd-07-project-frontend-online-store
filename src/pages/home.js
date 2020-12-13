import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BiCart, BiSearch, BiShoppingBag } from 'react-icons/bi';
import * as api from '../services/api';
import updateCartTotalinLocalStorage from '../services/updateCartTotal';

import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

class Home extends Component {
  constructor() {
    super();

    this.handleSearchKey = this.handleSearchKey.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.updateCartTotal = this.updateCartTotal.bind(this);

    this.state = {
      searchKey: '',
      category: '',
      results: [],
      total: 0,
    };
  }

  componentDidMount() {
    this.updateCartTotal();
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

  updateCartTotal() {
    const total = updateCartTotalinLocalStorage();
    this.setState({ total });
  }

  render() {
    const { results, category, searchKey, total } = this.state;
    const isEmpty = 0;
    return (
      <div>
        <header>
          <div className="div-logo">
            <BiShoppingBag className="icon-logo" />
            <h2 className="h2-title">Mall</h2>
          </div>
          <div className="div-search">
            <input
              data-testid="query-input"
              type="text"
              onChange={ this.handleSearchKey }
              placeholder="O que você procura hoje?"
            />
            <button type="submit" data-testid="query-button" onClick={ this.fetchAPI }>
              <BiSearch className="icon-search" />
            </button>
          </div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <BiCart className="icon-cart" />
            <div className="div-number-cart">
              {total !== isEmpty && <div data-testid="shopping-cart-size">{total}</div>}
            </div>
          </Link>
        </header>
        <div className="div-body">
          <Categories filterCategory={ this.handleCategory } />
          <ProductList
            results={ results }
            category={ category }
            searchKey={ searchKey }
            updateCartTotal={ this.updateCartTotal }
          />
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
