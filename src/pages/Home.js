import React, { Component } from 'react';
import Category from '../components/Category';
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
    const categoriesArr = await api.getCategories();
    this.setState({ categories: categoriesArr });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <input type="search" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Category categories={ categories } />
      </div>
    );
  }
}

export default Home;
