import React, { Component } from 'react';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';
import ShoppingCartButton from '../components/ShoppingCartButton';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() { this.fetchCategories(); }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <SearchBar />
        <ShoppingCartButton />
        <Category categories={ categories } />
      </div>
    );
  }
}

export default Home;
