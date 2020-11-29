import React, { Component } from 'react';
import * as cartStorage from '../../services/cartStorage';

class EmptyCard extends Component {
  constructor(props) {
    super(props);
    this.emptyCard = this.emptyCard.bind(this);
  }

  emptyCard() {
    cartStorage.emptyCard();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.emptyCard }
        >
          Esvaziar o carrinho
        </button>
      </div>
    );
  }
}

export default EmptyCard;
