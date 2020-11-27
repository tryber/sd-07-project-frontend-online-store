import React from 'react';
import CategoryList from '../components/CategoryList';
import ProductsList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';
import ShoppingCartButton from '../components/ShoppingCartButton';
import * as api from '../services/api';

class Products extends React.Component {
  constructor() {
    super();

    this.showProducts = this.showProducts.bind(this);
    this.state = {
      products: [],
      loading: false,
      querySearch: '',
    };
    this.handleSelectedCategory = this.handleSelectedCategory.bind(this);
  }

  async showProducts(querySearch, selectedCategory) {
    this.setState({ loading: true, querySearch }, async () => {
      const response = await api.getProductsFromCategoryAndQuery(
        selectedCategory, querySearch,
      );
      const productsResponse = response.results;
      this.setState({
        products: productsResponse,
        loading: false,
      });
    });
  }

  handleSelectedCategory(selectedCategoryId) {
    const { querySearch } = this.state;
    this.showProducts(querySearch, selectedCategoryId);
  }

  render() {
    const { loading } = this.state;

    if (loading) return '';

    const { products } = this.state;

    return (
      <div>
        <SearchBar getQuerySearch={ this.showProducts } />
        <ShoppingCartButton />
        <ProductsList products={ products } />
        <CategoryList handleCategory={ this.handleSelectedCategory } />
      </div>
    );
  }
}

export default Products;
