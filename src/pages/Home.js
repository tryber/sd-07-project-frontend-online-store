import React, { Component } from 'react';
import Category from '../components/Category';
import NotFound from '../components/NotFound';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import NotFound from '../components/NotFound';
import ShoppingCartButton from '../components/ShoppingCartButton';
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

  StatusSet(prevState) {
    const { products } = this.state;
    if (prevState.products !== products) {
      this.setState({ status: true });
    }
  }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  async fetchProducts(query, categoryId = '') {
    this.setState({
      products: await api.getProductsFromCategoryAndQuery(categoryId, query),
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
        <Category categories={ categories } />
        {status ? <ProductCard products={ products } /> : false}
      </div>
    );
  }
}

export default Home;
