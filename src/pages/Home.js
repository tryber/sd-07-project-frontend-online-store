import React, { Component } from 'react';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';
import ShoppingCartButton from '../components/ShoppingCartButton';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard';
import NotFound from '../components/NotFound';

class Home extends Component {
  constructor() {
    super();
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
      </div>
    );
  }
}

export default Home;
