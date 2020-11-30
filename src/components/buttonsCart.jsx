import React, { Component } from 'react';

export default class QuantifyProducts extends Component {
  constructor() {
    super();

    this.state = {
      quantify: 1,
    };
  }

  async increase() {
    const { quantify } = this.state;
    this.setState({ quantify: quantify + 1 });
  }

  async decrease() {
    const { quantify } = this.state;
    if (quantify > 1) {
      this.setState({ quantify: quantify - 1 });
    }
  }
  render() {
    const { quantify } = this.state;

    return (
      <div>
        <div>
          <button
            onClick={ () => this.increase() }
            type="button"
            data-testid="product-increase-quantity"
          >
            +
          </button> 
          <button
            onClick={ () => { this.decrease(); } }
            type="button"
            data-testid="product-decrease-quantity"
          >
            -
          </button>

          <button type="button">X</button>

          <div>{quantify}</div>

        </div>
      </div>
    );
  }
};
