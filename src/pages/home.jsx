import React from 'react';
import SearchBar from '../components/SearchBar';
import Caregories from '../components/Categories';
import ShoppingCartIcon from '../components/Shopping-cart-icon';
import List from '../components/List';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Caregories />
        <div>
          <div>
            <SearchBar />
            <ShoppingCartIcon />
          </div>
          <List />
        </div>
      </div>
    );
  }
}

export default Home;