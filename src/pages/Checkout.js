import React from 'react';
import { Redirect } from 'react-router-dom';

import BuyerInformation from '../components/BuyerInformation';
import CartSummary from '../components/CartSummary';
import PaymentMethods from '../components/PaymentMethods';

class Checkout extends React.Component {
  constructor() {
    super();
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.state = {
      shouldRedirect: false,
    };
  }

  mySubmitHandler(e) {
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Checkout</h1>
        <CartSummary />
        <BuyerInformation />
        <PaymentMethods />
        <input type="submit" value="Finalizar Compra" />
      </form>
    );
  }
}

export default Checkout;
