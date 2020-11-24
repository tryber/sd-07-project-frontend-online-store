import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoriesList extends Component {
  render() {
    return (
      <div className="home-initial">
        <div className="home-initial-input">
          <label htmlFor="home-initial-message">
            <input className="input" />
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
          </label>
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

export default CategoriesList;
