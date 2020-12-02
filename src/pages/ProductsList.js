import React, { Component } from 'react';
import * as api from '../services/api';
import {
  addProductInLocalStorage,
  recoveryProductsFromLocalStorage,
} from '../services/cartFunctions';
import SearchBar from '../components/SearchBar';
import FilteredProductsList from '../components/FilteredProductsList';
import ListCategory from '../components/ListCategory';
import Footer from '../components/Footer';

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productsToRender: [],
      inputSearchValue: '',
      shoppingCartItems: [],
    };
    this.fetchByQuery = this.fetchByQuery.bind(this);
    this.updateInputSearch = this.updateInputSearch.bind(this);
    this.addShoppingCartItems = this.addShoppingCartItems.bind(this);
    this.fetchByCategory = this.fetchByCategory.bind(this);
    this.onClickCategory = this.onClickCategory.bind(this);
  }

  componentDidMount() {
    recoveryProductsFromLocalStorage();
  }

  async onClickCategory(event) {
    const { target } = event;
    const categoryId = target.id;
    const { inputSearchValue } = this.state;
    const fetchWithCategoryAndQuery = await api.getProductsFromCategoryAndQuery(
      categoryId,
      inputSearchValue,
    );
    this.setState({
      productsToRender: fetchWithCategoryAndQuery.results,
    });
  }

  async fetchByQuery() {
    const { inputSearchValue } = this.state;
    const fetchResult = await api.getProductsFromCategoryAndQuery(
      false,
      inputSearchValue,
    );
    this.setState({
      productsToRender: fetchResult.results,
    });
  }

  async fetchByCategory(categoryId) {
    const { inputSearchValue } = this.state;
    const fetchWithCategoryAndQuery = await api.getProductsFromCategoryAndQuery(
      categoryId,
      inputSearchValue,
    );
    this.setState({
      productsToRender: fetchWithCategoryAndQuery.results,
    });
  }

  updateInputSearch(event) {
    const { target } = event;
    this.setState({
      inputSearchValue: target.value,
    });
  }

  async addShoppingCartItems(event) {
    const oldList = recoveryProductsFromLocalStorage();
    this.setState({
      shoppingCartItems: oldList,
    });
    const { target } = event;
    const { id } = target;
    const { productsToRender } = this.state;
    const newItem = productsToRender.filter((product) => product.id === id);
    await this.setState((previousState) => ({
      shoppingCartItems: [...previousState.shoppingCartItems, newItem[0]],
    }));
    const { shoppingCartItems } = this.state;
    addProductInLocalStorage(shoppingCartItems);
  }

  render() {
    const { productsToRender, inputSearchValue } = this.state;
    return (
      <div className="main-search">
        <section className="main-search-container">
          <SearchBar
            onSearch={ this.fetchByQuery }
            inputValue={ inputSearchValue }
            inputChange={ this.updateInputSearch }
          />
        </section>
        <section className="main-category-container">
          <ListCategory onClickCategory={ this.onClickCategory } />
          <FilteredProductsList
            allProducts={ productsToRender }
            addShoppingCartItems={ this.addShoppingCartItems }
          />
        </section>
        <Footer />
      </div>
    );
  }
}

export default ProductsList;
