import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import * as api from '../services/api';

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
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart !== null) {
      const INITIAL_ACC = 0;
      const total = cart.reduce((acum, { quantity }) => acum + quantity, INITIAL_ACC);
      this.setState({ total });
    } else {
      this.setState({ total: 0 });
    }
  }

  render() {
    const { results, category, searchKey, total } = this.state;
    const cart = JSON.parse(localStorage.getItem('cart'));
    const isEmpty = 0;
    return (
      <div>
        <header>
          <div>
            <input
              data-testid="query-input"
              type="text"
              onChange={ this.handleSearchKey }
            />
            <button type="submit" data-testid="query-button" onClick={ this.fetchAPI }>
              Search
            </button>
          </div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <BiCart className="icon-cart" />
            {/* {total !== isEmpty && <div data-testid="shopping-cart-size">{total}</div>} */}
            <div data-testid="shopping-cart-size">{cart.length}</div>
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
