import React from 'react';
import './InitialScreen.css';

class Kart extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Seu carrinho está vazio',
    };
  }

  render() {
    const { message } = this.state;
    const kartStatus = false;
    if (kartStatus === false) {
      return (
        <div className="kart">
          <h1 data-testid="shopping-cart-empty-message">{message}</h1>
        </div>
      );
    }
  }
}

export default Kart;
