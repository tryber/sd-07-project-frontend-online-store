import React from 'react';
import ClientRegister from '../components/clientRegister';
import Payment from '../components/payment';
import ProductsInCart from '../components/productsInCart';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <ProductsInCart />
        <ClientRegister />
        <Payment />
      </div>
    );
  }
}

export default Checkout;
