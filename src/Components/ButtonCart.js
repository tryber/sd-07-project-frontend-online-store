import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Home.css';

class ButtonCart extends React.Component {
  render() {
    return (
      <div className="header-link-cart">
        <Link data-testid="shopping-cart-button" to="/cartBuy">
          <img
            className="cartBuy"
            src="https://img.icons8.com/ios/452/shopping-cart.png"
            alt="imagem de carrinho"
          />
        </Link>
      </div>
    );
  }
}

export default ButtonCart;
