import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <input type="text" />
          <Link to="/cart" data-testid="shopping-cart-button">
            Carrinho de compras
          </Link>
        </header>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
