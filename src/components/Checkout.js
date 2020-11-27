import React from 'react';
import BuyerInformation from './checkout/BuyerInformation';
import PaymentMethod from './checkout/PaymentMethod';
import ReviewProducts from './checkout/ReviewProducts';
import * as utils from '../services/utils';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const productsFromCart = utils.picksUpItemsFromTheCartInLocalStorage();
    this.setState({
      products: productsFromCart,
    });
  }

  render() {
    const { totalPrice } = this.props.location;
    const { products } = this.state;
    return (
      <div>
        <ReviewProducts products={products} totalPrice={totalPrice} />
        <BuyerInformation />
        <PaymentMethod />
        <button>Comprar</button>
      </div>
    );
  }
}

export default Checkout;
