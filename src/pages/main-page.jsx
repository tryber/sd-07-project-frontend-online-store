import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';
import CategoryList from '../components/CategoryList';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <CategoryList />
        <Link to="/shopping-cart">
          <ShoppingCartOutlinedIcon data-testid="shopping-cart-button" />
        </Link>

      </div>
    );
  }
}

export default MainPage;
