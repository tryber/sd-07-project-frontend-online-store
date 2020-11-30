import React from 'react';
import CampoDeBusca from '../components/CampoDeBusca';
import BotaoCarrinho from '../components/BotaoCarrinho';
import ListaDeProdutos from '../components/ListaDeProdutos';
import ListaDeCategorias from '../components/ListaDeCategorias';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.updateChanges = this.updateChanges.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickCategories = this.handleClickCategories.bind(this);
    this.initialMessageOrListProducts = this.initialMessageOrListProducts.bind(this);
    this.state = {
      query: '',
      categoryId: '',
      categories: [],
      onFetchProducts: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categories,
      });
    });
  }

  updateChanges() {
    const { categoryId, query } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((response) => this.setState({
        onFetchProducts: response.results,
      }));
  }

  handleInputChange(search) {
    this.setState(() => ({
      query: search,
    }), () => this.updateChanges());
  }

  handleClickCategories(id) {
    this.setState({
      categoryId: id,
    }, () => this.updateChanges());
  }


  initialMessageOrListProducts(products) {
    const numberToComper = 0;
    if (products.length !== numberToComper) {
      return <ListaDeProdutos onFetchProducts={ products } />;
    }
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>);
  }

  render() {
    const { query, categories, onFetchProducts } = this.state;
    return (
      <div>
        <CampoDeBusca
          query={ query }
          handleInputChange={ this.handleInputChange }
        />
        { this.initialMessageOrListProducts(onFetchProducts) }
        <BotaoCarrinho />
        <ListaDeCategorias
          categories={ categories }
          handleClickCategories={ this.handleClickCategories }
        />
      </div>
    );
  }
}

export default Home;
