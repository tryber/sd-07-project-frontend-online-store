import React from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from '../Components/EmptyCart';
import Informations from '../Components/Informations';

class Cart extends React.Component {
  render() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    return (
      <div>
         <Link to="/">
          <img
            alt="Voltar"
            src="https://img.icons8.com/ios/2x/reply-arrow.png"
          />
        </Link>
        {!localStorage.length ? <EmptyCart /> : carrinho.map((item) => (<Informations
          key={ item.id }
          product={ item }
        />))}
        
      </div>
    );
  }
}

export default Cart;
