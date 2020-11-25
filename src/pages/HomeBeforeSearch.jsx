import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartIcon from '../img/shopping-cart.png';
import searchBarIcon from '../img/search-bar-icon.png';

export default class HomeBeforeSearch extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <div className="nav-bar">
          <div className="search-bar">
            <img src={ searchBarIcon } className="search-bar-icon" alt="searchBarIcon"/>
            <input className="search-bar-input" type="text" />
          </div>
        </div>
        <Link to="/ShoppingCart">
          <img data-testid="shopping-cart-button" src={ shoppingCartIcon } className="shopping-cart-icon" alt="shoppingCartImg"/>
        </Link>
        <div>
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
      </div>
    );
  }
}


