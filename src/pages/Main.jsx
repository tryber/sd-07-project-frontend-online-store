import React from 'react';
import { Link } from 'react-router-dom';


class Main extends React.Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
        <Link data-testid="shopping-cart-button" to="/cart">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    );
  }
}

export default Main;
