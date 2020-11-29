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
    };
  }

  componentDidMount() { this.fetchCategories(); }

  componentDidUpdate(prevProps, prevState) { this.StatusSet(prevState); }

  onClick(query) { this.fetchProducts(query); }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  StatusSet(prevState) {
    const { products } = this.state;
    if (prevState.products !== products) {
      this.setState({ status: true });
    }
  }

  async fetchProducts(query, categoryId = '') {
    this.setState({
      products: await api.getProductsFromCategoryAndQuery(categoryId, query),
    });
  }

  render() {
    const { categories, status, products } = this.state;
    const { results } = products;
    return (
      <div>
        <SearchBar onClick={ this.onClick } />
        <ShoppingCartButton />
        {
          status && (
            results.length
              ? <ProductCard products={ results } />
              : <NotFound />
          )
        }
        <Category categories={ categories } />
      </div>
    );
  }
}

export default Home;
