import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Categories from './Categories';

class Home extends Component {
  render() {
    return (
      <div>
        <header data-testid="home-initial-message">
          <form>
            <input />
          </form>
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </header>
        <div>
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            <FontAwesomeIcon icon={ faShoppingCart } />
          </Link>
        </div>
        <div>
          <Categories />
        </div>
      </div>
    );
  }
}

export default Home;
