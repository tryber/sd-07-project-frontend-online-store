import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import shoppingCartIcon from '../img/shopping-cart.png';
import searchBarIcon from '../img/search-bar-icon.png';
import CategoryList from './CategoryList';
import ProductsList from './ProductsList';

export default class HomeBeforeSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      categoryId: '',
      productList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchByCategory = this.fetchByCategory.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.fetchProducts();
  }

  async fetchProducts() {
    const { query } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(false, query);
    this.setState({ productList: products.results });
  }


  async fetchByCategory(categoryId) {
    console.log(categoryId);
    const products = await api.getProductsFromCategoryAndQuery(categoryId, false);
    this.setState({ productList: products.results });
  }


  render() {
    return (
      <div>
        <div className="nav-bar">
          <div className="search-bar">
            <img src={ searchBarIcon } className="search-bar-icon" alt="searchBarIcon" />
            <input
              name="query"
              className="search-bar-input"
              type="text"
              data-testid="query-input"
              onChange={ this.handleChange } />
          </div>
        </div>
        <Link to="/ShoppingCart" data-testid="shopping-cart-button">
          <img
            src={ shoppingCartIcon }
            className="shopping-cart-icon"
            alt="shoppingCartImg"/>
        </Link>
        <div data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <CategoryList fetchByCategory={ this.fetchByCategory } />
        <ProductsList productList={ this.state.productList } />
      </div>
    );
  }
}


