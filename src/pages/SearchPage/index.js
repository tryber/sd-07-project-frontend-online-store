import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as API from '../../services/api';
import SearchBar from '../../components/SearchBar';
import Categorias from '../../components/Categorias';
import Item from '../../components/Item';

import './style.css';
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

  componentDidMount() {
    API.getCategories().then((result) => this.setState({ listCategories: result }));
  }

  onClickPesquisar() {
    const { category, searchText } = this.state;

    API.getProductsFromCategoryAndQuery(
      category,
      searchText,
    ).then((result) => this.setState({ dataSearch: result }));
  }

  onSearchText(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  filterCategories(event) {
    const { searchText } = this.state;
    const { value } = event.target;

    API.getProductsFromCategoryAndQuery(
      value,
      searchText,
    ).then((result) => this.setState({ dataSearch: result }));
  }

  render() {
    const empty = 0;
    const { listCategories, searchText, dataSearch } = this.state;
    const { modifyCart, cartItems } = this.props;

    return (
      <div className="main-frame">
        <div className="category-list">
          <Categorias
            data={ listCategories }
            filterCategory={ this.filterCategories }
          />
        </div>
        <div className="search-frame">
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <div className="search-engine">
            <SearchBar
              searchText={ searchText }
              onSearchText={ this.onSearchText }
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.onClickPesquisar }
            >
              Pesquisar
            </button>
          </div>
          <div className="list-item">
            {
              dataSearch.length !== empty
              && dataSearch.results.map((item) => (
                <Item
                  item={ item }
                  key={ item.id }
                  modifyCart={ modifyCart }
                  cartItems={ cartItems }
                />
              ))
            }
          </div>
        </div>
        <CartIcon cartItems={ cartItems } />
      </div>
    );
  }
}

SearchPage.propTypes = {
  modifyCart: PropTypes.func.isRequired,
  cartItems: PropTypes.number.isRequired,
};

export default SearchPage;
