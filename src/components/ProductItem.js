import React, { Component } from 'react';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: '',
      name: '',
      amount: 0,
      total: 'XXX,XX',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addAmount() {
    let { amount } = this.state;
    amount += 1;
    this.setState({ amount });
  }

  lessAmount() {
    let { amount }
  }

  render() {
    const { imagePath, name, amount, total } = this.state;
    return (
      <div>
        <img src={ imagePath } alt="Imagem do Produto" />
        <p>{ name }</p>
        <button
          type="button"
          onClick={ this.handleChange }
          name="amount"
          value={ amount }
        >
          -
        </button>
        <p>{amount}</p>
        <button type="button">+</button>
        <p>{`R$ ${total}`}</p>
      </div>
    );
  }
}

export default ProductItem;
