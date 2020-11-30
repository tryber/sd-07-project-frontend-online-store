import React, { Component } from 'react';
import {
  Category, SearchBar, ProductCard, NotFound, ShoppingCartButton }
  from '../components/index';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      categories: [],
      products: {},
      status: false,
      categoryId: '',
      query: '',
    };
  }

  componentDidMount() { this.fetchCategories(); }

  componentDidUpdate(prevProps, prevState) { this.StatusSet(prevState); }

  onClick(key, value) {
    this.setState({
      [key]: value,
    });
  }

  StatusSet(prevState) {
    const { categoryId, query } = this.state;
    if (prevState.categoryId !== categoryId || prevState.query !== query) {
      this.fetchProducts();
    }
  }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  async fetchProducts() {
    const { categoryId, query } = this.state;
    this.setState({
      products: await api.getProductsFromCategoryAndQuery(categoryId, query),
      status: true,
    });
  }

  render() {
    const { categories, status, products } = this.state;
    return (
      <div>
        <SearchBar onClick={ this.onClick } />
        <ShoppingCartButton />
        {
          status && (
            products.results.length
              ? <ProductCard products={ products.results } />
              : <NotFound />
          )
        }
        <Category categories={ categories } onClick={ this.onClick } />
      </div>
    );
  }
}

export default Home;
