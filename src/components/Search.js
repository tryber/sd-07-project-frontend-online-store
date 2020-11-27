import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Cards from './Cards';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerms: '', products: [], alreadySelected: '' };
    this.handleSearchTerms = this.handleSearchTerms.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidUpdate() {
    const { alreadySelected } = this.state;
    const { selectedCategory } = this.props;
    if (selectedCategory !== alreadySelected) {
      this.fetchCategory();
    }
  }

  handleSearchTerms({ target }) {
    this.setState({ searchTerms: target.value });
  }

  async fetchAPI(event) {
    event.preventDefault();
    const { selectedCategory } = this.props;
    const { searchTerms } = this.state;
    const category = selectedCategory || '';
    const { results } = await api.getProductsFromCategoryAndQuery(category, searchTerms);
    this.setState({ products: results });
    const { products } = this.state;
    const { updateProducts } = this.props;
    updateProducts(products);
  }

  async fetchCategory() {
    const { selectedCategory } = this.props;
    const { results } = await api.getProductsFromCategoryAndQuery(selectedCategory, '');
    this.setState({ products: results, alreadySelected: selectedCategory });
    const { products } = this.state;
    const { updateProducts } = this.props;
    updateProducts(products);
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

Search.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  updateProducts: PropTypes.func.isRequired,
};

export default Search;
