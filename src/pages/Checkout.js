import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutProductItem from '../components/CheckoutProductItem';

class Checkout extends Component {
  constructor() {
    super();
    this.setSumOfCartPrice = this.setSumOfCartPrice.bind(this);
    this.state = { cartSum: 0 };
  }

  componentDidMount() {
    const { cart } = this.props;
    let sumOf = 0;
    for (let index = 0; index < cart.length; index += 1) {
      console.log(cart[index]);
      sumOf += cart[index].price;
    }

    this.setSumOfCartPrice(sumOf);
  }

  setSumOfCartPrice(value) {
    this.setState({ cartSum: value });
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
        <h2>Informações do Comprador</h2>
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Checkout;
