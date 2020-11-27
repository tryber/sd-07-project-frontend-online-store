import React from 'react';
import { Link } from 'react-router-dom';

class BotaoCarrinho extends React.Component {
  render() {
    return (
      <div>
        <button type='button'>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >Meu Carrinho</Link>
        </button>
      </div>
    );
  }
}

export default BotaoCarrinho;
