import React from 'react';
import { Link } from 'react-router-dom';

import { SideBar } from './index';
import './InitialScreen.css';
import KartImg from '../img/kart.svg'

import * as api from '../services/api';

class InitialScreen extends React.Component {
  constructor() {
    super();
    this.fetchProducts = this.fetchProducts.bind(this);
    this.onInputSearchChange = this.onInputSearchChange.bind(this);
    this.state = {
      searchInput: '',
      products: [],
      categories: [],
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
    };
  }

  async componentDidMount() {
    await this.fetchAPI();
  }

  async fetchAPI() {
    const { getCategories } = api;

    this.setState({
      categories: await getCategories(),
    });
  }

  async fetchProducts() {
    const dataInputSearch = this.state.searchInput;
    const getProducts = await api.getProductsFromCategoryAndQuery('query', dataInputSearch);
    this.setState({ products: getProducts.results });
  }

  onInputSearchChange({ target }) {
    this.setState({ searchInput: target.value });
    this.fetchProducts()
  }

  render() {
    const { message, searchInput } = this.state;
    return (
      <div className="container">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="container-initial-screen">
          <input type="text" name="inputSearch" value={searchInput} onChange={this.onInputSearchChange} />
          <Link data-testid="shopping-cart-button" to={'/kart'}><img src={KartImg} /></Link>
          <h1 data-testid="home-initial-message">{message}</h1>
        </div>
      </div>
    );
  }
}

export default InitialScreen;
