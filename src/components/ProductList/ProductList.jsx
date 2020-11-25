import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.onSearchInput = this.onSearchInput.bind(this);
    this.state = {
      searchInput: '',
    };
  }

  onSearchInput({ target }) {
    console.log(target);
    this.setState({ searchInput: target.value });
  }

  render() {
    const { searchInput } = this.state;
    return (
      <div>
        <SearchBar searchInput={ searchInput } onSearchInput={ this.onSearchInput } />

        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}

export default ProductList;
