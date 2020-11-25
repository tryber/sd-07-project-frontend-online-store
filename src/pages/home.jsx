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
    this.atualizar = this.atualizar.bind(this);
    this.buscaQuery = this.buscaQuery.bind(this);
    this.buscaCategory = this.buscaCategory.bind(this);
    this.buscaAmbos = this.buscaAmbos.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.state = {
      category: "",
      searchValue: "",
      list: {}
    }
  }

  async buscaQuery(query) {
    const lista = await api.getProductsFromQuery(query)
    this.setState({ list: lista });
    console.log(lista.results)
  }

  async buscaCategory(category) {
    const lista = await api.getProductsFromCategory(category)
    this.setState({ list: lista });
  }

  async buscaAmbos(category, query) {
    const lista = await api.getProductsFromCategoryAndQuery(category, query)
    this.setState({ list: lista });
  }

  atualizar() {
    const { searchValue, category } = this.state;
    if(category !== "") {
      if(searchValue !== "") {
        this.buscaAmbos(category, searchValue);
      }else {
        this.buscaCategory(category);
      }
    } else {
      if(searchValue !== "") {
        this.buscaQuery(searchValue);
      }
    }
  }

  async onClick(texto) {
    await this.setState({ searchValue: texto });
    this.atualizar();
  }

  async select(event) {
    await this.setState({ category: event.target.value })
    this.atualizar();
  }

  render() {
    const { list } = this.state;
    return(
      <div>
        <Caregories onChange={this.select} />
        <div>
          <div>
            <SearchBar onClick={this.onClick} />
            <ShoppingCartIcon />
          </div>
          <List lista={list} />
        </div>
      </div>
    );
  }
}

export default Home;