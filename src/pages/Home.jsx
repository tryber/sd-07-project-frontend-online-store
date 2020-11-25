import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/pages/shoppingcart"><img src="https://image.flaticon.com/icons/png/512/34/34562.png" alt="icone-carrinho" /></Link>
        <div data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
        < CategoryList />
      </div>
    );
  }
}
