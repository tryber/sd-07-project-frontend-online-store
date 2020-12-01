import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';


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
        <h3>{ quantity }</h3>
        <div>
          <button type="button" className="btn" onClick={ this.increment }>+</button>
        </div>
        <div>
          <button type="button" className="btn" onClick={ this.decrement }>-</button>
        </div>
      </main>
    );
  }
}

Quantity.propTypes = {
  parentState: PropTypes.shape({
    quantity: PropTypes.number,
  }),
};

export default Quantity;
