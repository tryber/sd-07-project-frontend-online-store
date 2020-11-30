import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import './SearchBar.css';
import CastegoryList from './CategoryList';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.arrayEmpty = this.arrayEmpty.bind(this);
    this.quantity = this.quantity.bind(this);
    this.state = {
      listOfProducts: [],
      query: '',
      category: '',
      objeto: [],
    };
  }

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem('cart'));
    // eslint-disable-next-line no-unused-expressions
    if (local === null) {
      this.arrayEmpty();
    } else {
      this.getLocalStorage();
    }
  }

  getLocalStorage() {
    const saveObj = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      objeto: saveObj,
    });
  }

  // eslint-disable-next-line react/sort-comp
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { query, category } = this.state;
    const getProductsFromCategoryOrQuery = await api
      .getProductsFromCategoryAndQuery(query, category);

    const retrieveProductsFromCategoryOrQuery = getProductsFromCategoryOrQuery.results;
    this.setState({ listOfProducts: retrieveProductsFromCategoryOrQuery });
  }

  async addToCart(item) {
    const { title, price, thumbnail, id } = item;
    console.log(item);
    const { objeto } = this.state;
    const objItem = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
    };
    const newState = [...objeto, objItem];
    this.setState({ objeto: newState });
    localStorage.setItem('cart', JSON.stringify(newState));
    this.quantity(item);
  }

  quantity(item) {
    const { id } = item;
    const array = JSON.parse(localStorage.getItem('cart'));
    const newId = id;
    const index = array.findIndex((elemento) => elemento.id === newId);
    const num = -1;
    // eslint-disable-next-line no-unused-expressions
    if (index === num) {
      array.push({ id: newId, quantidade: 1 });
    } else {
      array[index].quantidade += 1;
    }
    localStorage.setItem('cart', JSON.stringify(array));
  }

  arrayEmpty() {
    this.setState({ objeto: [] });
  }

  render() {
    const { listOfProducts } = this.state;
    return (
      <div>
        <div>
          <CastegoryList
            handleClick={ this.handleClick }
            handleChange={ this.handleChange }
          />
        </div>

        <div className="search-bar-div">
          <input
            name="query"
            className="query-input"
            onChange={ this.handleChange }
            data-testid="query-input"
            type="text"
            id="list"
          />

          <button
            className="query-button"
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </div>

        <p className="home-initial-message" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div className="containerCard">
          {listOfProducts.map((itens) => (
            <div className="product-card" data-testid="product" key={ itens.id }>
              <Link
                data-testid="product-detail-link"
                to={ {
                  pathname: `/ProductDetails/${itens.id}`,
                  state: {
                    detailsId: itens.id,
                    detailsTitle: itens.title,
                    detailsThumbnail: itens.thumbnail,
                    detailsPrice: itens.price,
                    FreeShipping: itens.shipping.free_shipping,
                  },
                } }
              >
                {
                  itens.shipping.free_shipping
                    ? <span data-testid="free-shipping"> Frete: grátis</span> : null
                }
                <img
                  className="thumbnail-card"
                  src={ itens.thumbnail }
                  alt={ itens.title }
                />
                <h1 className="title-card">{ itens.title }</h1>
                <span className="price-card">
                  R$
                  { itens.price }
                </span>

              </Link>
              <button
                type="button"
                name={ itens.id }
                className="details-link"
                data-testid="product-add-to-cart"
                onClick={ () => this.addToCart(itens) }
              >
                Adicionar ao carrinho
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
