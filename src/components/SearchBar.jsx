import React, { Component } from "react";
import * as api from "../services/api";
import "./SearchBar.css";
import CastegoryList from "./CategoryList";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      listOfProducts: [],
      query: "",
      category: "",
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const getProductsFromCategoryOrQuery = await api.getProductsFromCategoryAndQuery(
      this.state.query,
      this.state.category
    );

    const retrieveProductsFromCategoryOrQuery =
      getProductsFromCategoryOrQuery.results;
    this.setState({
      listOfProducts: retrieveProductsFromCategoryOrQuery,
    });
  }

  render() {
    return (
      <div>
        <div>
          <CastegoryList
            handleClick={this.handleClick}
            handleChange={this.handleChange}
          />
        </div>

        <div className="search-bar-div">
          <input
            name="query"
            className="query-input"
            onChange={this.handleChange}
            data-testid="query-input"
            type="text"
            id="list"
          ></input>

          <button
            className="query-button"
            data-testid="query-button"
            type="button"
            onClick={this.handleClick}
          >
            Pesquisar
          </button>
        </div>

        <label
          className="home-initial-message"
          htmlFor="list"
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <div className="containerCard">
          {this.state.listOfProducts.map((itens) => (
            <div className="product-card" data-testid="product" key={itens.id}>
              <img
                className="thumbnail-card"
                src={itens.thumbnail}
                alt={itens.title}
              />
              <h1 className="title-card">{itens.title}</h1>
              <span className="price-card">R$ {itens.price}</span>
              <a className="details-link" href="http://www.google.com">
                Ver detalhes
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
