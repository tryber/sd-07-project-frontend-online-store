import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import shoppingCartIcon from '../img/shopping-cart.png';
import searchBarIcon from '../img/search-bar-icon.png';

export default class HomeBeforeSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      categoryId: '',
      productList: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    const { categoryId, query } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((result) => this.setState({ productList: result.results }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.fetchProducts();
  }

  render() {
    const { productList } = this.state;
    return (
      <div data-testid="home-initial-message">
        <div className="nav-bar">
          <div className="search-bar">
            <img src={ searchBarIcon } className="search-bar-icon" alt="searchBarIcon"/>
            <input className="search-bar-input" type="text" data-testid="query-input" onChange={ this.handleChange }/>
          </div>
        </div>
        <Link to="/ShoppingCart">
          <img data-testid="shopping-cart-button" src={ shoppingCartIcon } className="shopping-cart-icon" alt="shoppingCartImg"/>
        </Link>
        <div>
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <ul>
          {productList.length
            ? productList.map(({ id, title, thumbnail, price }) => (
              <li
                key={ id }
                data-testid="product"
              >
                <h4>{ title }</h4>
                <img src={ thumbnail } alt="Product" />
                <p>{ price }</p>
              </li>
            )) : (<li> Nenhum produto foi encontrado </li>)}
        </ul>
      </div>
    );
  }
}


