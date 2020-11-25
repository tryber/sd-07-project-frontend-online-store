import React from 'react';
import { Link } from 'react-router-dom';

import { SideBar } from './index';
import './InitialScreen.css';
import KartImg from '../img/kart.svg';
import ProductCard from './ProductCard';

import * as api from '../services/api';

class InitialScreen extends React.Component {
  constructor() {
    super();
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.onInputSearchChange = this.onInputSearchChange.bind(this);
    this.buttonSearch = this.buttonSearch.bind(this);
    this.onChangeCategorySelected = this.onChangeCategorySelected.bind(this);
    this.state = {
      searchInput: '',
      categories: [],
      products: [],
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      categorySelected: '',
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  onInputSearchChange({ target }) {
    this.setState({ searchInput: target.value });
  }

  onChangeCategorySelected({ target }) {
    this.setState({ categorySelected: target.id }, () => {
      this.fetchProducts();
    });
  }

  buttonSearch() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { searchInput, categorySelected } = this.state;
    const dataInputSearch = searchInput;
    const datacategorySelected = categorySelected;
    const getProducts = await api.getProductsFromCategoryAndQuery(
      datacategorySelected,
      dataInputSearch,
    );
    this.setState({ products: getProducts.results });
  }

  async fetchAPI() {
    const { getCategories } = api;

    this.setState({
      categories: await getCategories(),
    });
  }

  render() {

    const { message, searchInput, products, categories } = this.state;

    return (
      <div className="container">
        <div className="side-bar">
          <SideBar
            categories={ categories }
            onChangeCategorySelected={ this.onChangeCategorySelected }
          />
        </div>
        <header className="container-initial-screen">
          <input
            data-testid="query-input"
            type="text"
            name="inputSearch"
            value={ searchInput }
            onChange={ this.onInputSearchChange }
          />
          <button data-testid="query-button" type="submit" onClick={ this.buttonSearch }>
            Buscar
          </button>
          <Link data-testid="shopping-cart-button" to="/kart">
            <img src={ KartImg } alt="Botão carrinho de compras" />
          </Link>
          <h1 data-testid="home-initial-message">{message}</h1>
        </header>
        <div>
          {products.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))}
        </div>
      </div>
    );
  }
}

export default InitialScreen;
