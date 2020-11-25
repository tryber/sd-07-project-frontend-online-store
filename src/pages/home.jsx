import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/categoryList';
import SearchBar from '../components/searchBar';

class Home extends React.Component {
  render() {
    return(
      <div>
        <SearchBar />
        <Category />
        <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho de compras</Link>
      </div>
    )
  }
}

export default Home;