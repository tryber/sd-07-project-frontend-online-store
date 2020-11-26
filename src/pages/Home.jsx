import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ListCategory from '../components/ListCategory';
import CardProduct from '../components/CardProduct';
import '../App.css';
import Loading from '../components/Loading';

class Home extends React.Component {
  constructor() {
    super();

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.fetchQueryAndCategoryId = this.fetchQueryAndCategoryId.bind(this);
    this.sendCategoryId = this.sendCategoryId.bind(this);

    this.state = {
      searchKey: '',
      searchProducts: [],
      categoryId: '',
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
    const { searchKey, searchProducts, loading } = this.state;
    return (
      <div className="home-container">
        <div className="home-aside-container">
          <ListCategory sendCategoryId={ this.sendCategoryId } />
        </div>
        <div className="home-search-container">
          <div className="search-subcontainer">
            <div className="search-subcontainer-top-bar">
              <Link to="/Cart" data-testid="shopping-cart-button">
                <img
                  alt="Carrinho"
                  src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG37.png"
                />
              </Link>
            </div>
            <input
              name="searchKey"
              type="text"
              value={ searchKey }
              onChange={ this.handleSearchChange }
              data-testid="query-input"
            />
            <button
              type="button"
              onClick={ this.fetchQueryAndCategoryId }
              data-testid="query-button"
            >
              <img alt="Buscar" src="https://assets.stickpng.com/thumbs/585e4ad1cb11b227491c3391.png" />
            </button>
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
