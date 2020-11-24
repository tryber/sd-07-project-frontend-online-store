import React, { Component } from 'react'
import CategoryList from './CategoryList';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="search-bar">
          <input type="text" />
        </label>
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      <CategoryList />
      </div>
    );
  }
}

export default SearchBar;
