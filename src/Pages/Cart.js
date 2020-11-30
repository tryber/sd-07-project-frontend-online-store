import React from 'react';
import EmptyCart from '../Components/EmptyCart';
import Informations from '../Components/Informations';

class Cart extends React.Component {
  render() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    return( 
      <div>
        {localStorage.length === 0 ? <EmptyCart /> : carrinho.map((item) => <Informations 
        key={item.id} product={item} />) }
      </div>
    )
  }
};

export default Cart;
