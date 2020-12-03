import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchBar from '../components/searchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        {/* CategoryList
        ProductCard */}
        <Link
          to="/shoppingCart"
          data-testid="shopping-cart-button"
        >
          <ShoppingCartIcon
            color="action"
            fontSize="large"
          />
        </Link>
      </div>
    );
  }
}

export default Home;
