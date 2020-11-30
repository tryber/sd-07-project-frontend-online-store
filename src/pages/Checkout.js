import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutProductItem from '../components/CheckoutProductItem';
import CheckoutBuyerForm from '../components/CheckoutBuyerForm';

class Checkout extends Component {
  constructor() {
    super();
    this.setSumOfCartPrice = this.setSumOfCartPrice.bind(this);
    this.calculatingTotal = this.calculatingTotal.bind(this);
    this.state = { cartSum: 0 };
  }

  componentDidMount() {
    const zero = 0;
    const sumOf = this.calculatingTotal(zero);
    this.setSumOfCartPrice(sumOf);
  }

  setSumOfCartPrice(value) {
    this.setState({ cartSum: value });
  }

  calculatingTotal(inititalValue) {
    const { cart } = this.props;
    let sum = inititalValue;
    let index = inititalValue;

    for (index; index < cart.length; index += 1) {
      sum += cart[index].price;
    }

    return sum;
  }

  render() {
    const { cart } = this.props;
    const { cartSum } = this.state;
    return (
      <div>
        <h1>Finalize sua compra</h1>
        <h2>Revise seus produtos</h2>
        {
          cart.map((element) => (<CheckoutProductItem
            key={ element.id }
            item={ element }
          />))
        }
        <p>
          Total:
          {' '}
          {cartSum}
        </p>
        <CheckoutBuyerForm />
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Checkout;
