import React, { Component } from 'react';

import Products from './Products';
import * as api from '../services/api';

class ProductListing extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.queryProducts = this.queryProducts.bind(this);
    this.state = {
      loading: false,
      products: [],
      searchText: '',
    };
  }

  async queryProducts() {
    this.setState({ loading: true }, async () => {
      const queryReturn = await api
        .getProductsFromQuery(this.state.searchText)
        .then((r) => r.results);
      this.setState({
        products: queryReturn,
        loading: false,
      });
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          data-testid="query-input"
          className="search-category"
          type="text"
          name="searchText"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button onClick={this.queryProducts} data-testid="query-button">
          DISPARA API
        </button>
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default ProductListing;
