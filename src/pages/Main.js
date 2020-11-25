import React from 'react';
import { Link } from 'react-router-dom';
import chart from '../icon/chart.png';
import '../App.css';

class Main extends React.Component {
  render() {
    return (
      <div>
        <input className="searchInput" type="search" />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          <img className="chartImg" src={ chart } alt="carrinho-de-compras" />
        </Link>
      </div>
    );
  }
}

export default Main;
