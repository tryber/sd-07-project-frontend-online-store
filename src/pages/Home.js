import React, { Component } from 'react';
import Category from '../components/Category';
import * as api from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';
import ProductCard from '../components/ProductCard';
import NotFound from '../components/NotFound';

class Home extends Component {
  constructor() {
    super();
    this.fetchProductList = this.fetchProductList.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      categories: [],
      products: [],
      status: false,
      order: '',
      notFound: false,
    };
  }

  componentDidMount() { this.fetchCategories(); }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchProductList() {
    const { order } = this.state;
    const requestReturn = await api.getProductsFromCategoryAndQuery(order);
    const sizeListResult = requestReturn.results.length;
    const minimumNumberOfProducts = 1;
    if (sizeListResult < minimumNumberOfProducts) {
      this.setState({ notFound: true });
    }
    this.setState({
      products: requestReturn.results,
      status: true,
    });
  }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  render() {
    const { categories, products, status, notFound } = this.state;
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
        <ShoppingCartButton />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {status ? <ProductCard products={ products } /> : false}
        {notFound ? <NotFound /> : false}
        <Category categories={ categories } />
      </div>
    );
  }
}

export default Home;
