import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as API from '../../services/api';
import SearchBar from '../../components/SearchBar';
import Categorias from '../../components/Categorias';
import Item from '../../components/Item';

import './style.css';
import Button from '../../components/Button';
import CartIcon from '../../components/CartIcon';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listCategories: [],
      searchText: '',
      dataSearch: [],
      category: '',
    };

    this.onSearchText = this.onSearchText.bind(this);
    this.onClickPesquisar = this.onClickPesquisar.bind(this);
    this.filterCategories = this.filterCategories.bind(this);
  }

  filterCategories(event) {
    const { value } = event.target;
    API.getProductsFromCategoryAndQuery(
      value,
      this.state.searchText
    ).then(result => this.setState({ dataSearch: result }));
  }

  onSearchText(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  onClickPesquisar() {
    API.getProductsFromCategoryAndQuery(
      this.state.category,
      this.state.searchText
    ).then(result => this.setState({ dataSearch: result }));
  }

  componentDidMount() {
    API.getCategories().then((result) =>
      this.setState({ listCategories: result })
    );
  }

  render() {
    return (
      <div className="main-frame">
        <div className="category-list">
          <Categorias
            data={this.state.listCategories}
            filterCategory={this.filterCategories}
          />
        </div>
        <div className="search-frame">
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <div className="search-engine">
            <SearchBar
              searchText={this.state.searchText}
              onSearchText={this.onSearchText}
            />
            <button data-testid="query-button" onClick={this.onClickPesquisar}>
              Pesquisar
            </button>
          </div>
          <div className="list-item">
            {
              this.state.dataSearch.length !== 0 &&
              this.state.dataSearch.results.map((item) => (
                <Item item={item} key={item.id} modifyCart={this.props.modifyCart} cartItems={this.props.cartItems}/>
              ))
            }
          </div>
        </div>
        <CartIcon cartItems={this.props.cartItems}/>
      </div>
    );
  }
}

export default SearchPage;
