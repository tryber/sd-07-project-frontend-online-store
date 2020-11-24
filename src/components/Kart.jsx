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
    if (kartStatus === false) {
      return (
        <div className="kart">
          <h1>{message}</h1>
        </div>
      );
    }
  }
}

export default Kart;
