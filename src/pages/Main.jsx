import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import ProductList from './ProductList';


class Main extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
        <Link data-testid="shopping-cart-button" to="/cart">
          <i className="fas fa-shopping-cart" />
        </Link>
        <Category />
        <ProductList />
      </div>
    );
  }
}

export default Main;
