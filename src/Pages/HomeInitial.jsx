import React, { Component } from 'react';
import ShoppingCartButton from '../Components/ShoppingCartButton';
import * as api from '../services/api';
import SearchBar from '../Components/SearchBar';

class HomeInitial extends Component {
  constructor() {
    super();
    this.searchEventHandler = this.searchEventHandler.bind(this);
    this.searchOnChange = this.searchOnChange.bind(this);
    this.state = {
      productArr: [],
      searchBarValue: undefined,
    };
  }

  async searchEventHandler() {
    const { searchBarValue } = this.state;
    const dataArr = await api.getProductsFromCategoryAndQuery(searchBarValue);
    this.setState({
      productArr: dataArr,
    });
  }

  searchOnChange() {
    this.setState({ searchBarValue: Eventarget.value });
    console.log(this.state.searchBarValue);
  }

  render() {
    const { productArr } = this.state;
    return (
      <div className="home-page">
        <ShoppingCartButton className="shopping-cart-button" />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <SearchBar
          searchEventHandler={ this.searchEventHandler }
          searchOnChange={ this.searchOnChange }
        />
      </div>
    );
  }
}

export default HomeInitial;
