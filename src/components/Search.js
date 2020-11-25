import React from 'react';
import * as api from '../services/api';
import Cards from './Cards';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerms: '', products: [] };
    this.handleSearchTerms = this.handleSearchTerms.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  handleSearchTerms({ target }) {
    this.setState({ searchTerms: target.value });
  }

  async fetchAPI(event) {
    event.preventDefault();
    const { searchTerms } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery('', searchTerms);
    this.setState({ products: results });
  }

  render() {
    const { searchTerms, products } = this.state;
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>

        <form>
          <input
            type="text"
            data-testid="query-input"
            value={ searchTerms }
            onChange={ this.handleSearchTerms }
          />

          <button
            type="button"
            data-testid="query-button"
            onClick={ this.fetchAPI }
          >
            buscar

          </button>
        </form>

        <Cards products={ products } />
      </div>
    );
  }
}

export default Search;
