import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Quantity extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  increment() {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      quantity: Math.max(prevState.quantity - 1, 1),
    }));
  }

  render() {
    const { quantity } = this.state;
    return (
      <main>
        <div>
          <button
            data-testid="product-increase-quantity"
            type="button"
            className="btn"
            onClick={ this.increment }
          >
            +
          </button>
        </div>
        <en>{ quantity }</en>
        <div>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            className="btn"
            onClick={ this.decrement }
          >
            -
          </button>
        </div>
      </main>
    );
  }
}

export default Quantity;
