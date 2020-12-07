import React from 'react';
import * as api from '../services/api';
import ListCategory from '../components/ListCategory';
import CardProduct from '../components/CardProduct';
import '../App.css';
import Loading from '../components/Loading';
import TopBar from '../components/TopBar';
import Logo from '../images/clube-dos-4.png';

class Home extends React.Component {
  constructor() {
    super();

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.fetchQueryAndCategoryId = this.fetchQueryAndCategoryId.bind(this);
    this.sendCategoryId = this.sendCategoryId.bind(this);

    this.state = {
      newSearch: '',
      searchKey: '',
      searchProducts: [],
      categoryId: ' ',
      loading: false,
    };
  }

  handleSearchChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  fetchQueryAndCategoryId() {
    this.setState(
      {
        loading: true,
      },
      async () => {
        const { searchKey, categoryId } = this.state;
        const response = await api.getProductsFromCategoryAndQuery(
          categoryId,
          searchKey,
        );
        // console.log(response.results);
        this.setState({
          loading: false,
          searchProducts: [...response.results],
          newSearch: searchKey,
        });
      },
    );
  }

  sendCategoryId({ target }) {
    this.setState(
      {
        loading: true,
        categoryId: target.id,
      },
      () => this.fetchQueryAndCategoryId(),
    );
  }

  render() {
    const { newSearch, searchKey, categoryId, searchProducts, loading } = this.state;
    return (
      <div className="home-container">
        <div className="home-aside-container">
          <img
            alt="logo"
            src={ Logo }
            width={ 200 }
          />
          <ListCategory sendCategoryId={ this.sendCategoryId } />
        </div>
        <div className="home-search-container">
          <div className="search-subcontainer">
            <TopBar />
            <div className="search-bar-container">
              <input
                name="searchKey"
                type="text"
                value={ searchKey }
                onChange={ this.handleSearchChange }
                data-testid="query-input"
              />
              <button
                className="search-button"
                type="button"
                onClick={ this.fetchQueryAndCategoryId }
                data-testid="query-button"
              >
                <img alt="Buscar" src="https://icon-library.net//images/icon-magnifying-glass/icon-magnifying-glass-10.jpg" />
              </button>
            </div>
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
            <div className="item-cards-container">
              {loading ? (
                <Loading />
              ) : (
                searchProducts.map((item) => (
                  <CardProduct
                    key={ item.id }
                    item={ item }
                    categoryId={ categoryId }
                    searchKey={ newSearch === '' ? ' ' : newSearch }
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
