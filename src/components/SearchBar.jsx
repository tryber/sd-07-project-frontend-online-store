import React, { Component } from 'react';
import * as api from '../services/api';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      loading: true,
      categoryId: '',
      query: '',
      product: [],
    };
  }

  async handleSearch() {
    const { categoryId, query } = this.state;
    const productSearch = await api
      .getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      product: productSearch.results,
    }, () => this.setState({ loading: false }));
  }


  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.persist();
    this.handleSearch();
  }

  render() {
    const { product, loading } = this.state;
    const message = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    const loadingMessage = <p data-testid="home-initial-message">{message}</p>;
    return (
      <div>
        <label htmlFor="search-bar">
          <input
            data-testid="query-input"
            type="text"
            name="query"
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            type="submit"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </label>
        {loading
          ? loadingMessage
          : product.map((item) => <ProductList key={ item.id } product={ item } />)}
        <CategoryList
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
      </div>
    );
  }
}

export default SearchBar;
