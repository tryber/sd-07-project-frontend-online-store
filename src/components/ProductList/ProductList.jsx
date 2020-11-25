import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import * as api from '../../services/api';
import InitialMessage from '../InitialMessage/InitialMessage';
import NotFound from '../NotFound/NotFound';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.onSearchInput = this.onSearchInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      searchInput: '',
      productList: [],
    };
  }

  onSearchInput({ target }) {
    console.log(target);
    this.setState({ searchInput: target.value });
  }

  onSubmit() {
    const { searchInput } = this.state;
    api.getProductsFromCategoryAndQuery(category, searchInput).then((object) => {
      this.setState({ productList: object.results });
    });
  }

  render() {
    const { searchInput, productList } = this.state;

    if (searchInput === '') {
      return (
        <div>
          <SearchBar
            searchInput={searchInput}
            onSearchInput={this.onSearchInput}
            onSubmit={this.onSubmit}
          />
          <InitialMessage />
        </div>
      );
    }

    if (searchInput !== '' && productList.length !== 0) {
      return (
        <div>
          <SearchBar
            searchInput={searchInput}
            onSearchInput={this.onSearchInput}
            onSubmit={this.onSubmit}
          />
          <div>
            {productList.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div>
        <SearchBar
          searchInput={searchInput}
          onSearchInput={this.onSearchInput}
          onSubmit={this.onSubmit}
        />
        <NotFound />
      </div>
    );
  }
}

export default ProductList;
