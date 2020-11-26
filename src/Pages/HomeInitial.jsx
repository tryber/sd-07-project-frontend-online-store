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
    const { selectedCategory } = this.state;
    if (searchBarValue === '' && selectedCategory !== '') {
      const dataByCategory = await api.getProductsFromCategory(selectedCategory);
      this.setState({
        productArr: dataByCategory.results,
      });
    }
    if (searchBarValue !== '' && selectedCategory === '') {
      const dataBySearch = await api.getProductsFromQuery(searchBarValue);
      console.log(dataBySearch);
      this.setState({
        productArr: dataBySearch.results,
      });
    }
    if (searchBarValue !== '' && selectedCategory !== '') {
      const dataArr = await api.getProductsFromCategoryAndQuery(selectedCategory, searchBarValue);
      console.log(dataArr);
      this.setState({
        productArr: dataArr.results,
      });
    } else {
      // throw new Error;
    }

    // solução que tratava o retorno da API vazia 
    /* if (dataArr.results.length < 1) {
      this.setState({
        productArr: undefined,
      });
    } */
  }

  handleCategoryChange(event) {
    this.setState({ selectedCategory: event.target.value }, this.searchEventHandler);
  }

  render() {
    const { productArr } = this.state;
    return (
      <div className="home-page">
        <CategoryList
          handleCategoryChange={ this.handleCategoryChange }
          searchEventHandler={ this.searchEventHandler }
        />
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
