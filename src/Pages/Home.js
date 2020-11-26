import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Components/Search';
import CategoryList from '../Components/CategoryList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cartBuy">
          <img
            className="cartBuy"
            src="https://img.icons8.com/ios/452/shopping-cart.png"
            alt="imagem de carrinho"
          />
        </Link>
        <CategoryList />
        <Search />
      </div>
    );
  }
}

export default Home;
