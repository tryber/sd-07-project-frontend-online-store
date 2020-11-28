import React, { Component } from 'react';
<<<<<<< HEAD
import Category from '../components/Category';
import NotFound from '../components/NotFound';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import ShoppingCartButton from '../components/ShoppingCartButton';
import * as api from '../services/api';
=======
import * as api from '../services/api';
import ProductCard from '../components/ProductCard';
import NotFound from '../components/NotFound';

>>>>>>> defee5958a5b15999adbc9c0e23ddcbea71e8bbe

class Home extends Component {
  constructor() {
    super();
<<<<<<< HEAD
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
    return (
      <div>
        <SearchBar handleChange={ this.handleChange } onClick={ this.onClick } />
        {notFound ? <NotFound /> : false}
        <ShoppingCartButton />
        <Category categories={ categories } />
        {status ? <ProductCard products={ products } /> : false}
=======
    this.state = {
      products: [],
      status: false,
      order: '',
      notFound: false,
    };
    this.fetchProductList = this.fetchProductList.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchProductList() {
    const { order } = this.state;
    const requestReturn = await api.getProductsFromQuery(order);
    const sizeListResult = requestReturn.results.length;
    const minimumNumberOfProducts = 1;
    console.log(sizeListResult);
    if (sizeListResult < minimumNumberOfProducts) {
      this.setState({ notFound: true });
    }
    this.setState({
      products: requestReturn.results,
      status: true,
    });
  }

  render() {
    const { products, status, notFound } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          type="search"
          name="order"
          onChange={ this.onChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.fetchProductList }
        >
          BUSCAR
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {status ? <ProductCard products={ products } /> : false}
        {notFound ? <NotFound /> : false}
>>>>>>> defee5958a5b15999adbc9c0e23ddcbea71e8bbe
      </div>
    );
  }
}

export default Home;
