import React, { Component } from 'react';
import * as api from '../services/api';
import { addProductInLocalStorage, recoveryProductsFromLocalStorage } from '../services/cartFunctions';
import SearchBar from '../components/SearchBar';
import FilteredProductsList from '../components/FilteredProductsList';
import ListCategory from '../components/ListCategory';
class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productsToRender: undefined,
      inputSearchValue: '',
      shoppingCartItems: [],
    };
    this.fetchByQuery = this.fetchByQuery.bind(this);
    this.updateInputSearch = this.updateInputSearch.bind(this);
    this.addShoppingCartItems = this.addShoppingCartItems.bind(this);
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
    console.log(JSON.parse(localStorage.getItem('shoppingCartItem')));
    const { productsToRender, inputSearchValue } = this.state;
    return (
      <div>
        <SearchBar
          onSearch={ this.fetchByQuery }
          inputValue={ inputSearchValue }
          inputChange={ this.updateInputSearch }
        />
        <FilteredProductsList allProducts={ productsToRender } addShoppingCartItems={ this.addShoppingCartItems } />
        <ListCategory />
      </div>
    );
  }
}

export default ProductsList;
