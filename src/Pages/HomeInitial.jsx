import React, { Component } from 'react';
import ShoppingCartButton from '../Components/ShoppingCartButton';
import SearchBar from '../Components/SearchBar';
import * as api from '../services/api';
import ProductCard from '../Components/ProductCard';
import CategoryList from '../Components/CategoryList';

class HomeInitial extends Component {
  constructor() {
    super();
    this.searchEventHandler = this.searchEventHandler.bind(this);
    this.searchOnChange = this.searchOnChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);

    this.state = {
      productArr: [],
      searchBarValue: '',
      selectedCategory: '',
    };
  }

  getProductList() {
    const { productArr } = this.state;
    return productArr.map(
      (product) => <li data-testid="product" key={ product.id }><ProductCard product={ product } /></li>,
    );
  }

  searchOnChange(event) {
    this.setState({ searchBarValue: event.target.value });
  }

  async searchEventHandler() {
    const { searchBarValue } = this.state;
    const dataArr = await api.getProductsFromCategoryAndQuery(searchBarValue);
    if (dataArr.results.length < 1) {
      this.setState({
        productArr: undefined,
      });
    } else {
      this.setState({
        productArr: dataArr.results,
      });
    }
  }

  handleCategoryChange(event) {
    this.setState({
      selectedCategory: event.target.value,
    });
  }

  render() {
    const { productArr } = this.state;
    return (
      <div className="home-page">
        <CategoryList handleCategoryChange={ this.handleCategoryChange } />
        <ShoppingCartButton className="shopping-cart-button" />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <SearchBar
          searchEventHandler={ this.searchEventHandler }
          searchOnChange={ this.searchOnChange }
        />
        <ul>
          {productArr !== undefined ? this.getProductList() : <p>Nenhum produto foi encontrado</p>}
        </ul>
      </div>
    );
  }
}

export default HomeInitial;
