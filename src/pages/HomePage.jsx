import React, { Component } from 'react';
import ShoppingCartButton from '../components/ShoppingCartButton/ShoppingCartButton';
import CategoryList from '../components/CategoryList/CategoryList';
import SearchBar from '../components/SearchBar/SearchBar';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard/ProductCard';
import Loading from '../components/Loading/Loading';
import InitialMessage from '../components/InitialMessage/InitialMessage';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
    this.state = {
      categoryId: '',
      searchInput: '',
      productList: [],
      loading: false,
    };
  }

  onChangeCategory({ target }) {
    this.setState({
      loading: true,
      categoryId: target.id,
    }, () => this.fetchProducts());
  }

  fetchProducts() {
    const { searchInput, categoryId } = this.state;
    this.setState({ loading: true }, async () => {
      const filteredProducts = await api
        .getProductsFromCategoryAndQuery(categoryId, searchInput);
      this.setState({
        loading: false,
        productList: filteredProducts.results,
      });
    });
  }

  onChangeSearchInput({ target }) {
    this.setState({ searchInput: target.value });
  }

  render() {
    const { searchInput, productList, loading } = this.state;
    return (
      <div>
        <SearchBar
          onSearchInput={ this.onChangeSearchInput }
          searchInput={ searchInput }
          onSubmit={ this.fetchProducts }
        />
        <CategoryList onChangeCategory={ this.onChangeCategory } />
        <ShoppingCartButton />
        <InitialMessage />
        {loading ? <Loading /> : productList
          .map((product) => <ProductCard product={ product } key={ product.id } />)}
      </div>
    );
  }
}

export default HomePage;
