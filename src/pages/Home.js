import React, { Component } from 'react';
import Category from '../components/Category';
import NotFound from '../components/NotFound';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import ShoppingCartButton from '../components/ShoppingCartButton';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      categories: [],
      products: [],
      category: '',
      query: '',
      status: false,
      notFound: false,
    };
  }

  componentDidMount() { this.fetchCategories(); }


  onClick() {
    this.fetchProducts();
  }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  async fetchProducts() {
    const { category, query } = this.state;
    const resultRequest = await api.getProductsFromCategoryAndQuery(category, query);
    const empytArray = 0;
    if (resultRequest.results.length === empytArray) {
      this.setState({
        notFound: true,
      });
    } else {
      this.setState({
        products: resultRequest.results,
        status: true,
      });
    }
  }


  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { categories, products, status, notFound } = this.state;
    console.log(notFound);
    return (
      <div>
        <SearchBar handleChange={ this.handleChange } onClick={ this.onClick } />
        {notFound ? <NotFound /> : false}
        <ShoppingCartButton />
        <Category categories={ categories } />
        {status ? <ProductCard products={ products } /> : false}
      </div>
    );
  }
}

export default Home;
