import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class QueryBar extends Component {
  render() {
    const { query, onQueryChange, onClick } = this.props;
    return (
      <div className="home-initial">
        <div className="home-initial-input">
          <label htmlFor="home-initial-message">
            <input
              className="input"
              data-testid="query-input"
              placeholder="Pesquisar"
              value={ query }
              onChange={ onQueryChange }
            />
            <button
              className="query-button"
              data-testid="query-button"
              type="submit"
              onClick={ onClick }
            >
              Pesquisar
            </button>
          </label>
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        </div>
        <Link
          to="/shoopingcart"
          data-testid="shopping-cart-button"
          className="home-initial-link"
        >
          <img
            src="images/shopping-cart-50.png"
            alt="Carrinho de Compras"
          />
        </Link>
      </div>
    );
  }
}
