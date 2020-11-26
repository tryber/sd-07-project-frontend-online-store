import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import * as api from '../../services/api';
import InitialMessage from '../InitialMessage/InitialMessage';
import NotFound from '../NotFound/NotFound';
import ProductCard from '../ProductCard/ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.onSearchInput = this.onSearchInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      searchInput: '',
      productList: [],
      categoryId: '',
    };
  }

  componentDidMount() {
    this.onSubmit();
  }

  onSearchInput({ target }) {
    console.log(target);
    this.setState({ searchInput: target.value });
  }

  onSubmit() {
    const { categoryId } = this.props;
    const { searchInput } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, searchInput)
      .then((object) => {
        this.setState({ productList: object.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { searchInput, productList } = this.state;
    const { categoryId } = this.props;

    if (searchInput === '' && categoryId === '') {
      return (
        <div>
          <SearchBar
            searchInput={ searchInput }
            onSearchInput={ this.onSearchInput }
            onSubmit={ this.onSubmit }
          />
          <InitialMessage />
        </div>
      );
    }

    if (searchInput === '' && categoryId !== '') {
      return (
        <div>
          <SearchBar
            searchInput={ searchInput }
            onSearchInput={ this.onSearchInput }
            onSubmit={ this.onSubmit }
          />
          <div>
            {productList.map((product) => (
              <ProductCard product={ product } key={ product.id } />
            ))}
          </div>
        </div>
      );
    }

    if (searchInput !== '' && productList.length) {
      return (
        <div>
          <SearchBar
            searchInput={ searchInput }
            onSearchInput={ this.onSearchInput }
            onSubmit={ this.onSubmit }
          />
          <div>
            {productList.map((product) => (
              <ProductCard product={ product } key={ product.id } />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div>
        <SearchBar
          searchInput={ searchInput }
          onSearchInput={ this.onSearchInput }
          onSubmit={ this.onSubmit }
        />
        <NotFound />
      </div>
    );
  }
}

ProductList.propTypes = {
  categoryId: PropTypes.string.isRequired,
};

export default ProductList;
