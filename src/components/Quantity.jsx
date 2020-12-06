import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Quantity.css';

class Quantity extends Component {
  constructor() {
    super();
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    // this.inputNumber = this.inputNumber.bind(this);
    // this.state = {
    //   id: '',
    //   quantity: 1,
    // };
  }

  // componentDidMount() {
  //   this.setState({
  //     id: this.props.id,
  //     quantity: this.props.quantity,
  //   });
  // }

  minus(id, quantity) {
    const { changeQuantity } = this.props;
    const minValue = 1;
    if (quantity > minValue) {
      changeQuantity(id, quantity - 1);
    }
  }

  plus(id, quantity, available_quantity) {
    const { changeQuantity } = this.props;
    if (quantity < available_quantity) {
      changeQuantity(id, quantity + 1);
    }
  }

  // inputNumber(id, event) {
  //   const regex = /^[0-9\b]+$/;
  //   const quantity = event.target.value;

  //   if (event.target.value === '' || regex.test(event.target.value)) {
  //     this.props.changeQuantity(id, quantity);
  //   }
  // }

  // onBlur(id, event) {
  //   if (event.target.value === '') {
  //     this.props.changeQuantity(id, 1);
  //   }
  // }

  render() {
    const { id, quantity, available_quantity } = this.props;
    return (
      <div className="container">
        <button
          type="button"
          className="minus sign"
          onClick={ () => this.minus(id, quantity) }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span
          className="number"
          data-testid="shopping-cart-product-quantity"
          // { this.disable }
        >
          {quantity}
        </span>
        {/* <input
          type="text"
          className="number"
          min="1"
          value={quantity.toString()}
          onChange={(event) => this.inputNumber(id, event)}
          onBlur={(event) => this.onBlur(id, event)}
          // data-testid="shopping-cart-product-quantity"
        /> */}
        <button
          type="button"
          className="plus sign"
          onClick={ () => this.plus(id, quantity, available_quantity) }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    );
  }
}

Quantity.propTypes = {
  changeQuantity: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  available_quantity: PropTypes.number.isRequired,
};

export default Quantity;
