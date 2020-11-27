import React, { Component } from 'react';
import Category from '../components/Category';
import * as api from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      // products: [],
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
        <input type="search" />
        <ShoppingCartButton />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Category categories={ categories } />
      </div>
    );
  }
}

export default Home;
