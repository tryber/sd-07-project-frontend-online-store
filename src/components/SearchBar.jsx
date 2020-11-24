import React from 'react';
import { Link } from 'react-router-dom';
import cart from './img/shopping.png';
class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <label>
            <input type="text" />
          </label>
          <Link to="/shoppingcart">
            <img src={cart} alt="Shopping Cart"/>
          </Link>
        </div>
        <h3 data-testid="home-initial-message" >Digite algum termo de pesquisa ou escolha uma categoria.</h3>
      </div>
    );
  };
}

export default SearchBar;