import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ListCategory from '../components/ListCategory';
import CardProduct from '../components/CardProduct';
import '../App.css';

class Home extends React.Component {
  constructor() {
    super();

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.fetchQuery = this.fetchQuery.bind(this);

    this.state = {
      searchKey: '',
      searchProducts: [],
      category: '',
    };
  }

  handleSearchChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchQuery() {
    const { searchKey, category } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(category, searchKey);
    this.setState({
      searchProducts: [...response.results],
    });
  }

  render() {
    const { searchKey, searchProducts } = this.state;
    return (
      <div className="home-container">
        <div className="home-aside-container">
          <ListCategory />
        </div>
        <div className="home-search-container">
          <div className="search-subcontainer">
            <input
              name="searchKey"
              type="text"
              value={ searchKey }
              onChange={ this.handleSearchChange }
              data-testid="query-input"
            />
            <button
              type="button"
              onClick={ this.fetchQuery }
              data-testid="query-button"
            >
              Buscar
            </button>
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
            <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
            <div className="item-cards-container">
              {
                searchProducts.map((item) => <CardProduct key={ item.id } item={ item } />)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
