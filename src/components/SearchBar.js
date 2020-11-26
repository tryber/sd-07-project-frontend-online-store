import React from 'react';
import PropTypes from 'prop-types';

import CategoryList from './CategoryList';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };

    this.sendQuerySearch = this.sendQuerySearch.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  sendQuerySearch() {
    const { query } = this.state;
    const { getQuerySearch } = this.props;
    getQuerySearch(query);
  }

  handleQuery({ target }) {
    this.setState({ query: target.value });
  }

  render() {
    return (
      <div>
        Barra de busca
        <CategoryList />
        <input onChange={ this.handleQuery } data-testid="query-input" />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.sendQuerySearch }
        >
          Enviar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  getQuerySearch: PropTypes.func.isRequired,
};

export default SearchBar;
