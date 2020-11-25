import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input name="search" type="text" />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

export default Home;
