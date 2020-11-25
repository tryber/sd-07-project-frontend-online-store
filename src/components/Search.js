import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Cards from './Cards';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerms: '', products: [] };
    this.handleSearchTerms = this.handleSearchTerms.bind(this)
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  handleSearchTerms({ target }) {
    this.setState({ searchTerms: target.value });
  }

  async fetchAPI(event) {
    event.preventDefault();
    const response = await getProductsFromCategoryAndQuery('MLB271599', this.state.searchTerms);
    console.log(response);
  }

  render() {
    const { searchTerms } = this.state;
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>

        <form>
          <input
            type="text"
            data-testid="query-input"
            value={searchTerms}
            onChange={this.handleSearchTerms}
          />

          <button
            data-testid="query-button"
            onClick={this.fetchAPI}
          >buscar</button>
        </form>

        <Cards /> 
      </div>
    );
  }
}

export default Search;
