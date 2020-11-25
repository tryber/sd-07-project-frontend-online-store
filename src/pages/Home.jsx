import React from 'react';
import ListCategory from '../components/ListCategory';
import '../App.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-aside-container">
          <ListCategory />
        </div>
        <div className="home-search-container">
          <div className="search-subcontainer" >
            <input name="search" type="text" />
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
            <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
