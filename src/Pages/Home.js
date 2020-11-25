import React from 'react';
import Header from '../Components/Header';
import Categories from '../Components/Categories';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = { categories: [] };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <Header />
        <Categories categories={ categories } />
      </div>
    );
  }
}

export default Home;
