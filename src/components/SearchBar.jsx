import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      query: '',
    };
  }

  onClick() { this.fetchProducts(query); }

  async fetchProducts(query, categoryId = '') {
    this.setState({
      products: await api.getProductsFromCategoryAndQuery(categoryId, query),
    });
  }

  onChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  getElement() {
    return (
      <div>
        <input
          data-testid="query-input"
          type="search"
          name="query"
          onChange={ (event) => this.onChange(event) }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => { this.onClick(); } }
        >
          BUSCAR
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    )
  }
  render() {
    return (
      getElement()
    );
  }
}

export default SearchBar;
