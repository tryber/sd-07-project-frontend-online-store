import React from 'react';
import SearchBar from '../components/SearchBar';
import Caregories from '../components/Categories';
import ShoppingCartIcon from '../components/Shopping-cart-icon';
import List from '../components/List';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.select = this.select.bind(this);
    this.buscaCategoryAndQuery = this.buscaCategoryAndQuery.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.localStorageCart = this.localStorageCart.bind(this);
    this.state = {
      category: '',
      searchValue: '',
      list: {},
    };
  }

  componentDidMount() {
    this.atualizar();
    this.localStorageCart();
  }

  async onClick(texto) {
    await this.setState({ searchValue: texto });
    this.atualizar();
  }

  localStorageCart() {
    if (!localStorage.getItem('cartItems')) {
      const cartItemsStorage = [];
      localStorage.setItem('cartItems', JSON.stringify(cartItemsStorage));
    }
  }

  async buscaCategoryAndQuery(category, query) {
    const lista = await api.getProductsFromCategoryAndQuery(category, query);
    this.setState({ list: lista });
  }

  atualizar() {
    const { searchValue, category } = this.state;
    if (searchValue !== '' || category !== '') {
      this.buscaCategoryAndQuery(category, searchValue);
    } else {
      this.setState({ list: {} });
    }
  }

  async select(event) {
    await this.setState({ category: event.target.value });
    this.atualizar();
  }

  render() {
    const { list } = this.state;
    return (
      <div className="home">
        <div className="barraH">
          <h1 className="barraHh1">OS 4</h1>
          <div className="ps">
            <SearchBar onClick={ this.onClick } />
            <ShoppingCartIcon />
          </div>
        </div>
        <div className="page">
          <Caregories onChange={ this.select } />
          <List lista={ list } />
        </div>
      </div>
    );
  }
}

export default Home;
