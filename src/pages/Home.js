import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  componentDidMount() {
    this.fetchCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    this.StatusSet(prevState);
  }

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
    const { shoppingCard, addToCard } = this.props;
    return (
      <div>
        <SearchBar onClick={ this.onClick } />
        <ShoppingCartButton productsInShoppingCart={ shoppingCard } />
        {status
          && (products.results.length ? (
            <ProductCard
              products={ products.results }
              addToCard={ addToCard }
              shoppingCard={ shoppingCard }
            />
          ) : (
            <NotFound />
          ))}
        <Category categories={ categories } onClick={ this.onClick } />
      </div>
    );
  }
}

Home.propTypes = {
  shoppingCard: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCard: PropTypes.func.isRequired,
};

export default Home;
