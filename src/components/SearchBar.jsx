import React, { Component } from 'react';
import * as api from '../services/api';
import ProductList from './ProductList';
import CategoryList from './CategoryList';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      // loading: false,
      categoryId: '',
      query: '',
      product: [],
    };
  }

  componentDidMount() {
    this.handleSearch();
  }

  async handleSearch() {
    const { categoryId, query } = this.state;
    this.setState(
      // { loading: true },
      async () => {
        const productSearch = await api
          .getProductsFromCategoryAndQuery(categoryId, query);
        this.setState({
        // loading: false,
          product: productSearch.results,
        });
      },
    );
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.handleSearch();
  }

  render() {
    const { product } = this.state;
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
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {product.map((item) => <ProductList key={ item.id } product={ item } />)}
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <CategoryList />
      </div>
    );
  }
}

export default SearchBar;
