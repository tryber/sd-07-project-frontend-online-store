import React, { Component } from 'react';

class ShoppingListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: '',
      name: '',
      amount: 0,
      total: 'XXX,XX',
    };
    this.addAmount = this.addAmount.bind(this);
    this.lessAmount = this.lessAmount.bind(this);
  }

  addAmount() {
    let { amount } = this.state;
    amount += 1;
    this.setState({ amount });
  }

  lessAmount() {
    const lowerLimit = 0;
    let { amount } = this.state;
    if (amount > lowerLimit) {
      amount -= 1;
    }
    this.setState({ amount });
  }

  render() {
    const { imagePath, name, amount, total } = this.state;
    return (
      <div>
        <button
          type="button"
        >
          X
        </button>
        <img src={ imagePath } alt="Imagem do Produto" />
        <p>{ name }</p>
        <button
          type="button"
          onClick={ this.lessAmount }
          name="amount"
          value={ amount }
        >
          -
        </button>
        <p>{amount}</p>
        <button
          type="button"
          onClick={ this.addAmount }
          name="amount"
          value={ amount }
        >
          +
        </button>
        <p>{`R$ ${total}`}</p>
      </div>
    );
  }
}

export default ShoppingListItem;
