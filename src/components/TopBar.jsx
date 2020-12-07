import React from 'react';
import { Link } from 'react-router-dom';

class TopBar extends React.Component {
  render() {
    return (
      <div className="header-container">
        <Link to="/">
          <img
            alt="home"
            src="https://www.flaticon.com/svg/static/icons/svg/25/25694.svg"
            width={ 20 }
          />
        </Link>
        <Link to="/Cart" data-testid="shopping-cart-button">
          <img
            alt="Carrinho"
            src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG37.png"
          />
        </Link>
      </div>
    );
  }
}

export default TopBar;
