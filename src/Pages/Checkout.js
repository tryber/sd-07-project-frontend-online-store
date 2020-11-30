import React from 'react';
import CheckoutForm from '../Components/CheckoutForm';
import ListProductsCheckout from '../Components/ListProductsCheckout';
import Header from '../Components/Header';


class Checkout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ListProductsCheckout />
        <CheckoutForm />
      </div>
    );
  }
}

export default Checkout;
