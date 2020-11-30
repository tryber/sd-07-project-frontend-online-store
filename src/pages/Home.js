import React from 'react';
import CampoDeBusca from '../components/CampoDeBusca';
import BotaoCarrinho from '../components/BotaoCarrinho';
<<<<<<< HEAD
import ListaDeCategorias from '../components/ListaDeCategorias';
import * as api from '../services/api';
import ListaDeProdutos from '../components/ListaDeProdutos';
=======
import ListaDeProdutos from '../components/ListaDeProdutos';
import ListaDeCategorias from '../components/ListaDeCategorias';
import * as api from '../services/api';
>>>>>>> main-group-2

class Home extends React.Component {
  constructor() {
    super();
<<<<<<< HEAD
    this.initialMessageOrListProducts = this.initialMessageOrListProducts.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
=======
    this.updateChanges = this.updateChanges.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickCategories = this.handleClickCategories.bind(this);
    this.initialMessageOrListProducts = this.initialMessageOrListProducts.bind(this);
>>>>>>> main-group-2
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

<<<<<<< HEAD
  handleInputChange(search) {
    this.setState(() => ({
      query: search,
    }), () => {
      const { categoryId, query } = this.state;
      api.getProductsFromCategoryAndQuery(categoryId, query)
        .then((response) => this.setState({
          onFetchProducts: response.results,
        }));
    });
  }

=======
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


>>>>>>> main-group-2
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
<<<<<<< HEAD
        <ListaDeCategorias categories={ categories } />
=======
        <ListaDeCategorias
          categories={ categories }
          handleClickCategories={ this.handleClickCategories }
        />
>>>>>>> main-group-2
      </div>
    );
  }
}

export default Home;
