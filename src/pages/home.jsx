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
    this.state = {
      category: "",
      searchValue: "",
      list: {},
    }
  }

  componentDidMount() {
    this.atualizar();
  }

  async buscaCategoryAndQuery(category, query) {
    const lista = await api.getProductsFromCategoryAndQuery(category, query)
    this.setState({ list: lista });
  }

  atualizar() {
    const { searchValue, category } = this.state;
    if(searchValue !== '' || category !== '') {
      this.buscaCategoryAndQuery(category, searchValue);
    } else {
      this.setState({ list: {} })
    }
  }
  async onClick(texto) {
    await this.setState({ searchValue: texto });
    this.atualizar();
  }

  async select(event) {
    await this.setState({ category: event.target.value });
    this.atualizar();
  }

  render() {
    return(
      <div className="home">
        <Caregories onChange={this.select} />
        <div>
          <div>
            <SearchBar onClick={this.onClick} />
            <ShoppingCartIcon />
          </div>
          <List lista={this.state.list} />
        </div>
      </div>
    );
  }
}

export default Home;