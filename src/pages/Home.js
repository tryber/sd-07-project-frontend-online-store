import React, { Component } from 'react';
import {
  Category, SearchBar, ProductCard, NotFound, ShoppingCartButton }
  from '../components/index';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      status: false,
    };
  }

  componentDidUpdate(prevProps, prevState) { this.StatusSet(prevState); }

  componentDidMount() { this.fetchCategories(); }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  StatusSet(prevState) {
    const { products } = this.state;
    if (prevState.products !== products) {
      this.setState({ status: true });
    }
  }

  render() {
    const { categories, status } = this.state;
    return (
      <div>
        <SearchBar onClick={ this.onClick } />
        <ShoppingCartButton />
        { status ? <ProductCard /> : <NotFound /> }
        <Category categories={ categories } />
      </div>
    );
  }
}

export default Home;
