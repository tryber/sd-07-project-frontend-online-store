import React from 'react';
import CheckoutForm from '../Components/CheckoutForm';
import ListProductsCheckout from '../Components/ListProductsCheckout';


class Checkout extends React.Component {
  render() {
    return (
      <div>
        <ListProductsCheckout />
        <CheckoutForm />
      </div>
    );
  }
}

export default Checkout;
