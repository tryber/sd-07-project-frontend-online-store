import React, { Component } from 'react';

import Products from './Products';
import * as api from '../services/api';

class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.state = {
      loading: false,
      products: [],
      searchText: '',
      categorySelected: ''
    };
  }


  componentDidUpdate() {
    if (this.props.categoryId !== this.state.categorySelected) {
      this.getProducts()
    }
  }

  async getProducts() {
    const response = await api.getProductsFromCategoryAndQuery(this.props.categoryId, this.state.searchText)
    this.setState({
      categorySelected: this.props.categoryId,
      products: response.results,
      loading: false
    })
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
        <button onClick={this.getProducts} data-testid="query-button">
          DISPARA API
        </button>
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default ProductListing;
